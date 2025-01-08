import React from 'react';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
