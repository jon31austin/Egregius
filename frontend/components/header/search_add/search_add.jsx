import React from "react";
import { Link } from "react-router-dom";

const SearchAdd = () => {
  return (
    <div className="left-nav">
      <div className="add-song-link">
        <Link to="/tracks/new">Submit New Song</Link>
      </div>
    </div>
  )
};

export default SearchAdd;