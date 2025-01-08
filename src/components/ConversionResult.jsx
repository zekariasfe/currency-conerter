import React from 'react';

const ConversionResult = ({ result, baseCurrency, targetCurrency }) => {
  return (
    <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900 rounded text-center">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
        Conversion Result
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mt-2">
        {result} {targetCurrency}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Based on the current exchange rate from {baseCurrency} to {targetCurrency}.
      </p>
    </div>
  );
};

export default ConversionResult;
