import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div>
      <form action="https://www.google.com/search" method="get">
        <button className="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <input
          type="search"
          name="q"
          className="search-bar"
          placeholder="Search Something..."
        />
      </form>
    </div>
  );
}

export default Search;
