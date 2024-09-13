import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search NFTs"
        value={searchQuery} // Controlled input
        onChange={(e) => setSearchQuery(e.target.value)} // Update state on change
        className="w-96 h-12 rounded-xl px-4 border-2 border-blue-500 shadow-lg focus:border-blue-300 transition-all duration-300 text-black"
      />
    </div>
  );
}

export default SearchBar;
