import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";

const Header = () => {
  return (
    <header className="main-header">
      <div className="genius-logo">
        <Link to="/" className="header-link">
          <h1>Egregius</h1>
        </Link>
      </div>
      <GreetingContainer />
    </header>
  )
}

export default Header;