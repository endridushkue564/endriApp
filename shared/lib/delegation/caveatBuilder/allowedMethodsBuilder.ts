import type { Hex } from '../utils';
import { concat, isHex, toFunctionSelector } from '../utils';
import type { Caveat, DeleGatorEnvironment } from '..';

export const allowedMethods = 'allowedMethods';

export type MethodSelector = Hex | string;

const FUNCTION_SELECTOR_STRING_LENGTH = 10;

export const allowedMethodsBuilder = (
  environment: DeleGatorEnvironment,
  selectors: MethodSelector[],
): Caveat => {
  if (!selectors.length) throw new Error('Invalid selectors: must provide at least one selector');

  const terms = concat(selectors.map(selector => {
    if (isHex(selector)) {
      if (selector.length === FUNCTION_SELECTOR_STRING_LENGTH) return selector;
      throw new Error('Invalid selector: must be a 4 byte hex string or abi function signature');
    }
    try {
      return toFunctionSelector(selector);
    } catch (err) {
      throw new Error('Invalid selector: must be a 4 byte hex string or abi function signature', { cause: err });
    }
  }));

  const { caveatEnforcers: { AllowedMethodsEnforcer } } = environment;

  return { enforcer: AllowedMethodsEnforcer, terms, args: '0x' };
};
