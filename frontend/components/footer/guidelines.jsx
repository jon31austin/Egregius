import React from "react";

const Guidelines = () => {
  // I stole the classnames from the About component for similar styling
  return (
    <div className="about-center">
      <div className="about-main">
        <div className="about-the-app">
          <h1>How to contribute</h1>
          <p>If you have an urge to submit songs or annotations, dive right in!</p>
          <p>Some simple steps to take:</p>
          <ul>
            <li>Make sure you're signed in. Don't worry, your password is safely hashed!</li>
            <li>Select at least 15 characters from your song of choice.</li>
            <li>Annotate away!</li>
            <li>Feel free to edit or delete your own contributions by clicking on a pre-existing annotation.</li>
          </ul>
        </div>

        <div className="about-the-app">
          <h1>Contribution Guidelines</h1>
          <p>It's pretty simple, really.</p>
          <ul>
            <li>Please be helpful and respectful.</li>
            <li>Please don't be unhelpful or disrespectful.</li>
          </ul>
          <p>My mother reads this stuff, you know?</p>
        </div>
      </div>
    </div>
  )
};

export default Guidelines;