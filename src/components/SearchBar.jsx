import { useEffect, useState } from 'react';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');



  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search..."
        onChange={props.handleChange}
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-200 rounded-full focus:outline-none focus:shadow-md"
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
  );
};

export default SearchBar;
