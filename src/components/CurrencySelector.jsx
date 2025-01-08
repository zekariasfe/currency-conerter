import React from 'react';

const CurrencySelector = ({ label, selectedCurrency, onCurrencyChange, rates }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">{label} Currency</label>
      <select
        value={selectedCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-700 transition duration-200"
      >
        {rates
          ? Object.keys(rates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))
          : <option>Loading...</option>}
      </select>
    </div>
  );
};

export default CurrencySelector;
