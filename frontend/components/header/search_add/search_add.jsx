import React from "react";
import { Link } from "react-router-dom";

const SearchAdd = () => {
  return (
    <div>
      <div>
        <Link className="greeting-action" to="/tracks/new">Submit New Song</Link>
      </div>
    </div>
  )
};

export default SearchAdd;