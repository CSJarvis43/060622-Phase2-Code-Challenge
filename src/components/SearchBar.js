import React from "react";

function SearchBar({searchItem, handleSearch}) {




  return (
    <div className="search">
      <input type="text" className="searchTerm" value={searchItem} onChange={handleSearch}/>
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
