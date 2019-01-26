import React from "react";

const About = () => {
  return(
    <div className="about-center">
      <div className="about-main">
        <div className="about-the-app">
          <h1>About the App</h1>
          <p>First and foremost, it must be noted that Egregius set out to mimick the looks and features of <a href="www.genius.com">www.genius.com</a>, the best lyric and annotation resource on the web!</p>
          <p>On the front end, Egregius was created with React.js and Redux.js to create a seamless and user-friendly one-page application. As for the back end, Egregius sits on a sturdy Ruby on Rails foundation. Other technologies integral to the making of this website were: HTML, CSS, Ruby, Javascript, Webpack, Git. </p>
          <p>If you haven't already, feel free to explore the most important features: </p>
          <ul>
            <li>Real-time lyric interaction, including CRUD capabilities.</li>
            <li>Custom search function.</li>
            <li>Safe session management on the backbone of BCrypt hashing.</li>
            <li>Good vibes.</li>
          </ul>
        </div>

        <div>
          <h1>About the Creator</h1>
          <p>Skylar Prill is a bearded software developer based in San Francisco.</p>
        </div>

      </div>
    </div>
    
  )
};

export default About;