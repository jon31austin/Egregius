import React from "react";

const LoginPrompt = ({ openModal }) => {
  return (
    <div className="anno-fixed">
      <h2 className="anno-session" onClick={() => openModal("signup")}>
        Sign Up to Start Annotating
          </h2>
    </div>
  )
};

export default LoginPrompt;