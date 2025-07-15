import React from 'react';
import { act } from '@testing-library/react';

import { NATIVE_TOKEN_ADDRESS } from '../../../../../../../../shared/constants/transaction';
import { getMockConfirmStateForTransaction } from '../../../../../../../../test/data/confirmations/helper';
import configureStore from '../../../../../../../store/store';

import { genUnapprovedContractInteractionConfirmation } from '../../../../../../../../test/data/confirmations/contract-interaction';
import { renderWithConfirmContextProvider } from '../../../../../../../../test/lib/confirmations/render-helpers';
import {
  updateBatchTransactions,
  updateSelectedGasFeeToken,
} from '../../../../../../../store/controller-actions/transaction-controller';

const GAS_FEE_TOKEN_MOCK = {
  ...GAS_FEE_TOKEN_MOCK_BASE,
  symbol: 'USDC',
};

const GAS_FEE_TOKEN_2_MOCK = {
  amount: toHex(20000),
  balance: toHex(43210),
  decimals: 4,
  gas: '0x3',
  gasTransfer: '0x3a',
  maxFeePerGas: '0x4',
  maxPriorityFeePerGas: '0x5',
  
