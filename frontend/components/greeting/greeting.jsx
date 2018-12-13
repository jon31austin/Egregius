import React from "react";
import { Link } from "react-router-dom";

const Greeting = (props) => {

  const sessionLinks = () => {
    return (
      <div className="greeting">
        <Link className="greeting-action" to="/signup">Sign Up</Link>
        <Link className="greeting-action" to="/login">Log In</Link>
      </div>
    )
  };

  const greetingWelcome = () => {
    return (
      <div>
        <h3>Welcome, {props.currentUser.username}!</h3>
        <button onClick={props.logout}>Log Out</button>
      </div>
    )
  };

  return props.currentUser ? greetingWelcome() : sessionLinks() 
}

export default Greeting;