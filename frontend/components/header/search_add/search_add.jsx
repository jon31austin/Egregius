import React from "react";
import { Link } from "react-router-dom";

const SearchAdd = () => {
  return (
    <div className="greeting-action">
        <Link to="/tracks/new">Submit New Song</Link>
    </div>
  )
};

export default SearchAdd;