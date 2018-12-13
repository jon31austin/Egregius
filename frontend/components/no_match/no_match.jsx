import React from "react";
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div className="no-match-container">
      <div className="giant-sideways-e">
        E
      </div>

      <div className="no-match-text">
        <h1 className="no-match-oops">Oops! Page not found</h1>
        <p>Sorry, we didn't mean for that to happen!</p>
        <p>You can search Genius by using the search bar above, <Link className="no-match-link" to="/">or go back to the homepage.</Link> </p>
      </div>
    </div>
  )
}

export default NoMatch;