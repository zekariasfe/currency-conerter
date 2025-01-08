import React from 'react';

const MultiCurrencyConverter = ({ rates, amount }) => {
  if (!rates) return null;

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Multi-Currency Conversion</h2>
      <ul className="mt-2">
        {Object.entries(rates).map(([currency, rate]) => (
          <li key={currency}>
            {currency}: {(amount * rate).toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiCurrencyConverter;
