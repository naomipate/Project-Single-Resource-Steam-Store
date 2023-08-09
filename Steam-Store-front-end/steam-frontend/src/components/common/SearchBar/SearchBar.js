import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/context";
import { searchGame } from "../API/API";

function SearchBar() {
  const { searchTerm, setSearchResults, setSearchTerm } =
    useContext(SearchContext);

  async function handleSearch(e) {
    e.preventDefault();
    try {
      let result = await searchGame(searchTerm);
      setSearchResults(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <form className="d-flex" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          // onFocus={() => setIsSearching(true)}
          // onBlur={() => setIsSearching(false)}
        ></input>
        <button className="btn btn-secondary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
