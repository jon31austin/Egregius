import React from "react";
import { Link } from "react-router-dom";

const SearchListItem = ({ songInfoArray }) => {
  return (
    <li>
      <Link to={`/tracks/${songInfoArray[0]}`}>
        <div className="search-index-item">
          <h2>{songInfoArray[1]} by {songInfoArray[2]}</h2>
        </div>
      </Link>
    </li>
  )
};

export default SearchListItem;