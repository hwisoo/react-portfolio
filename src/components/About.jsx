import React from 'react';
// import { Link } from "react-router-dom";

function About() {
  return (
    <div id="aboutMain">
      <style jsx>
        {`
          #aboutMain {
            width: 60%;
            margin: auto;
          }
        `}
      </style>
      <h1>About</h1>
      <h2>Hi! My name is James.</h2>
      <p>
        I'm a developer based in the Seattle area, focusing on Angular and
        React. I am currently enrolled in Epicodus coding bootcamp to learn to
        be a programmer and pursue a career in tech! In my free time, I enjoy
        hiking and watching basketball.
      </p>
    </div>
  );
}

export default About;
