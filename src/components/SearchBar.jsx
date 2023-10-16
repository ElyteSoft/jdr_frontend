import { useEffect, useState } from 'react';

const SearchBar = (props) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      props.handleSearch();
    }
  }

  return (
    <div className='flex w-full px-10 py-5'>
      <div className="relative w-10/12">
      <input
        type="search"
        placeholder="Nombre y Apellido..."
        onChange={props.handleChange}
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-200 rounded-l-full focus:outline-none focus:shadow-md"
        onKeyDown={handleKeyPress}
      />
      <div className="absolute top-0 left-0 inline-flex items-center p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      </div>
      <div className='relative w-2/12'>
        <button onClick={props.handleSearch} className="w-full px-4 py-2 text-white bg-gray-500 rounded-r-full hover:bg-gray-400 focus:outline-none">Buscar</button>
      </div>
    </div>

  );
};

export default SearchBar;
