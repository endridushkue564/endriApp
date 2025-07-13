import { screen, fireEvent, waitFor } from '@testing-library/react';
import * as MOCKS from './mocks';
import * as CONSTANTS from './constants';
import { createSwapsMockStore, createGetSmartTransactionFeesApiResponse } from './mock-store';
import { renderWithProvider } from './rendering';

export {
  screen,
  fireEvent,
  waitFor,
  createSwapsMockStore,
  createGetSmartTransactionFeesApiResponse,
  renderWithProvider,
};
export * as MOCKS;
export * as CONSTANTS;
