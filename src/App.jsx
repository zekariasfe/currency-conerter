import React, { useState } from 'react';
import CurrencySelector from './components/CurrencySelector';
import AmountInput from './components/AmountInput';
import ConversionResult from './components/ConversionResult';
import ErrorAlert from './components/ErrorAlert';
import useExchangeRate from './hooks/useExchangeRate';

const App = () => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const { rates, error } = useExchangeRate(baseCurrency);
  const [darkMode, setDarkMode] = useState(false);

  const handleConversion = () => {
    if (rates && targetCurrency) {
      return (amount * rates[targetCurrency]).toFixed(2);
    }
    return '0.00';
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-4 md:p-8 lg:p-12`}>
      <div className="w-full max-w-md bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Toggle Dark Mode
        </button>
        <h1 className="text-2xl font-bold text-center mb-4">Currency Converter</h1>
        {error && <ErrorAlert message={error} />}
        <CurrencySelector
          label="From"
          selectedCurrency={baseCurrency}
          onCurrencyChange={setBaseCurrency}
          rates={rates}
        />
        <CurrencySelector
          label="To"
          selectedCurrency={targetCurrency}
          onCurrencyChange={setTargetCurrency}
          rates={rates}
        />
        <AmountInput value={amount} onAmountChange={setAmount} />
        <ConversionResult
          result={handleConversion()}
          baseCurrency={baseCurrency}
          targetCurrency={targetCurrency}
        />
      </div>
    </div>
  );
};

export default App;
