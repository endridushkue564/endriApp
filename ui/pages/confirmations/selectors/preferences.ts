import { getPreferences } from '../../../selectors';

export type RootState = {
  endriapp: {
    useTransactionSimulations?: boolean;
  };
};

const selectUseTransactionSimulations = (state: RootState) => state.endriapp.useTransactionSimulations;

const selectConfirmationAdvancedDetailsOpen = (state: RootState) =>
  Boolean(getPreferences(state).showConfirmationAdvancedDetails);

const getDismissSmartAccountSuggestionEnabled = (state: RootState) =>
  Boolean(getPreferences(state).dismissSmartAccountSuggestionEnabled);

const getUseSmartAccount = (state: RootState) =>
  Boolean(getPreferences(state).smartAccountOptIn);

const getSmartAccountOptInForAccounts = (state: RootState) =>
  getPreferences(state).smartAccountOptInForAccounts;
