// src/components/Employee/SearchBar.js
import React from "react";

const SearchBar = ({ query, setQuery, searchResult }) => {
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      searchResult();
    }
  };

  return (
    <div>
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-gray-500 py-2 mr-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-2    00 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Employee Name"
            aria-label="Full name"
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            onKeyUp={handleKeyUp}
          />
          <button
            className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={searchResult}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
