import { SWAPS_CHAINID_DEFAULT_TOKEN_MAP } from '../constants/swaps';

export function isSwapsDefaultTokenAddress(address, chainId) {
  return address === SWAPS_CHAINID_DEFAULT_TOKEN_MAP[chainId]?.address;
}

export function isSwapsDefaultTokenSymbol(symbol, chainId) {
  return symbol === SWAPS_CHAINID_DEFAULT_TOKEN_MAP[chainId]?.symbol;
}
