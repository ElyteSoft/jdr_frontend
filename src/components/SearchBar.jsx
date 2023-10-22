import { useEffect, useState } from "react";

const SearchBar = (props) => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggleChange = () => {
    props.handleToggleChange();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      props.handleSearch();
    }
  };

  return (
    <>
      <div className="flex w-full px-10 py-5">
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
        <div className="relative w-2/12">
          <button
            onClick={props.handleSearch}
            className="w-full px-4 py-2 text-white bg-gray-500 rounded-r-full hover:bg-gray-400 focus:outline-none"
          >
            Buscar
          </button>
        </div>
      </div>
      <div className="m-0 flex justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" onChange={handleToggleChange} checked={props.checked} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Buscar por Propietario
        </span>
      </label>
      </div>
      
    </>
  );
};

export default SearchBar;
