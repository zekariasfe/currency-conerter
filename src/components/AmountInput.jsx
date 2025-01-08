import React from 'react';

const AmountInput = ({ value, onAmountChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Amount</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onAmountChange(Number(e.target.value))}
        className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring focus:ring-blue-200 dark:focus:ring-blue-700 transition duration-200"
        placeholder="Enter amount"
      />
    </div>
  );
};

export default AmountInput;
