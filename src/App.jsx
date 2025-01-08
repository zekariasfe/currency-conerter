import React, { useState } from 'react';
import CurrencySelector from './components/CurrencySelector';
import AmountInput from './components/AmountInput';
import ConversionResult from './components/ConversionResult';
import ErrorAlert from './components/ErrorAlert';
import HistoricalRates from './components/HistoricalRates';
import FavoritePairs from './components/FavoritePairs';
import MultiCurrencyConverter from './components/MultiCurrencyConverter';
import DarkModeToggle from './components/DarkModeToggle';
import useExchangeRate from './hooks/useExchangeRate';

const App = () => {


  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

  const { rates, error } = useExchangeRate(baseCurrency);

  const handleConversion = () => (rates && targetCurrency ? (amount * rates[targetCurrency]).toFixed(2) : '0.00');

  const addFavorite = () => {
    const pair = `${baseCurrency}-${targetCurrency}`;
    if (!favorites.includes(pair)) {
      const updatedFavorites = [...favorites, pair];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };
  <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
  <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
    Tailwind CSS is Working!
  </h1>
</div>
  const removeFavorite = (pair) => {
    const updatedFavorites = favorites.filter((fav) => fav !== pair);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gray-100 dark:bg-gray-800`}>
      <div className="max-w-4xl mx-auto p-6">
        <DarkModeToggle isDarkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">Currency Converter</h1>
        {error && <ErrorAlert message={error} />}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <CurrencySelector label="From" selectedCurrency={baseCurrency} onCurrencyChange={setBaseCurrency} rates={rates} />
            <CurrencySelector label="To" selectedCurrency={targetCurrency} onCurrencyChange={setTargetCurrency} rates={rates} />
            <AmountInput value={amount} onAmountChange={setAmount} />
            <button
              onClick={addFavorite}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded transition"
            >
              Add to Favorites
            </button>
          </div>
          

          <div className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <ConversionResult result={handleConversion()} baseCurrency={baseCurrency} targetCurrency={targetCurrency} />
            <FavoritePairs favorites={favorites} removeFavorite={removeFavorite} />
          </div>
        </div>
        <div className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <MultiCurrencyConverter rates={rates} amount={amount} />
        </div>
        <div className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
          <HistoricalRates baseCurrency={baseCurrency} targetCurrency={targetCurrency} />
        </div>
      </div>
    </div>
  );
};

export default App;
