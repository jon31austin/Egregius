import React from "react";
import { Link } from "react-router-dom";

const SearchListItem = ({ songInfoArray }) => {
  return (
    <li>
      <Link to={`/tracks/${songInfoArray[0]}`}>
        <div className="track-index-item">
          <h2>{songInfoArray[1]}</h2>
          <h4>{songInfoArray[2]}</h4>
          <h4>Album: {songInfoArray[3]}</h4>
        </div>
      </Link>
    </li>
  )
};

export default SearchListItem;