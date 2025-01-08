import React from 'react';

const FavoritePairs = ({ favorites, removeFavorite }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold">Favorite Currency Pairs</h2>
      <ul className="mt-2">
        {favorites.length > 0 ? (
          favorites.map((pair) => (
            <li key={pair} className="flex justify-between items-center mb-2">
              {pair}
              <button onClick={() => removeFavorite(pair)} className="text-red-500">Remove</button>
            </li>
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </ul>
    </div>
  );
};

export default FavoritePairs;
