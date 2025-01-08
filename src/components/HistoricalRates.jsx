import React from 'react';

const HistoricalRates = ({ rates }) => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Historical Exchange Rates</h2>
      <ul className="mt-2">
        {rates ? (
          Object.entries(rates).map(([date, rate]) => (
            <li key={date}>
              {date}: {rate}
            </li>
          ))
        ) : (
          <p>No historical data available.</p>
        )}
      </ul>
    </div>
  );
};

export default HistoricalRates;
