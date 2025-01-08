import { useState, useEffect } from 'react';
import axios from 'axios';

const useExchangeRate = (baseCurrency, targetCurrency, startDate, endDate) => {
  const [rates, setRates] = useState(null);
  const [historicalRates, setHistoricalRates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/9c0d228adadd4324ac2794c8/latest/${baseCurrency}`);
        setRates(response.data.conversion_rates);
      } catch (err) {
        setError('Failed to fetch exchange rates. Please try again.');
      }
    };

    const fetchHistoricalRates = async () => {
      if (startDate && endDate && targetCurrency) {
        try {
          const response = await axios.get(
            `https://v6.exchangerate-api.com/v6/9c0d228adadd4324ac2794c8/history/${baseCurrency}/${startDate}/${endDate}/${targetCurrency}`
          );
          setHistoricalRates(response.data.rates);
        } catch (err) {
          setError('Failed to fetch historical rates. Please try again.');
        }
      }
    };

    fetchRates();
    fetchHistoricalRates();
  }, [baseCurrency, targetCurrency, startDate, endDate]);

  return { rates, historicalRates, error };
};

export default useExchangeRate;
