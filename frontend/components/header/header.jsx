import React from 'react';
import { Link } from 'react-router-dom';
import Search from "../search/search_container";
import GreetingContainer from "./greeting/greeting_container";

const Header = () => {
  return (
    <div>
      <header className="main-header">
        <Search />
        <div className="genius-logo">
          <Link to="/" className="header-link">
            <h1>Egregius</h1>
          </Link>
        </div>
        <GreetingContainer />
      </header>
      <div className="subheader">
        <div className="subheader-links">
          <Link to="/tracks/new">Submit New Song</Link>
          <Link to="/tracks/browse">Browse All Songs</Link>
        </div>
      </div>
    </div>
  )
}

export default Header;