import React from "react";

const SearchBar = ({ query, setQuery, searchResult }) => {
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      searchResult();
    }
  };

  return (
    <div className="w-full max-w-sm">
      <form className="w-full">
        <div className="flex flex-row items-center border-b border-gray-500 py-2">
          <input
            className="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none w-full sm:w-auto"
            type="text"
            placeholder="Search by Name"
            aria-label="Full name"
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            onKeyUp={handleKeyUp}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
