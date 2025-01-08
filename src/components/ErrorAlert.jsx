import React from 'react';

const ErrorAlert = ({ message }) => {
  return (
    <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700 rounded">
      <p>{message}</p>
    </div>
  );
};

export default ErrorAlert;
