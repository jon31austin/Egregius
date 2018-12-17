import React from "react";

import { openModal } from "../../../actions/modal_actions";

const Greeting = (props) => {

  const sessionLinks = () => {
    
    return (
      <div className="greeting">
        <div className="greeting-action" onClick={() => dispatch(openModal("signup"))}>Sign Up</div>
        <div className="greeting-action" onClick={() => dispatch(openModal("login"))}>Sign In</div>
      </div>
    )
  };

  const greetingWelcome = () => {
    return (
      <div className="greeting">
        <h3 className="greeting-message">Welcome, {props.currentUser.username}!</h3>
        <div className="greeting-action" onClick={props.logout}>Log Out</div>
      </div>
    )
  };

  return props.currentUser ? greetingWelcome() : sessionLinks() 
}

export default Greeting;