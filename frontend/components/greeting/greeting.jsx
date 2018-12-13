import React from "react";
import { Link } from "react-router-dom";

import { openModal } from "../../actions/modal_actions";

const Greeting = (props) => {

  const sessionLinks = () => {
    
    
    return (
      <div className="greeting">
        <div className="greeting-action" onClick={() => dispatch(openModal("signup"))}>Sign Up</div>
        <div className="greeting-action" onClick={() => dispatch(openModal("login"))}>Log In</div>
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