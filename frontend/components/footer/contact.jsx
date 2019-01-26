import React from "react";

const Contact = () => {
  return(
    <div className="about-center">
      <div className="about-main">
        <div className="about-the-app">
          <h1>Contact Me</h1>
          <p>Visit my websites!</p>
          <ul>
              <li onClick={() => window.open("https://www.linkedin.com/in/shp1990/")}>LinkedIn</li>
              <li onClick={() => window.open("https://github.com/L412")}>GitHub</li>
              <li onClick={() => window.open("www.skylarprill.com")}>Portfolio</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Contact;