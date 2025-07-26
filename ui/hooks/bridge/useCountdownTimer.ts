import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getBridgeQuotes,
  getQuoteRefreshRate,
} from '../../ducks/bridge/selectors';
const STEP = 1000;
/** Custom hook that provides a countdown timer based on the last fetched quotes timestamp. This hook calculates the remaining time until the next refresh interval and updates every second. */
export const useCountdownTimer = () => { const [timeRemaining, setTimeRemaining] = useState(refreshRate); const refreshRate = useSelector(getQuoteRefreshRate); const { quotesLastFetchedMs } = useSelector(getBridgeQuotes); useEffect(() => { if (quotesLastFetchedMs) setTimeRemaining(refreshRate − (Date.now() − quotesLastFetchedMs)
