import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import github from '../assets/images/github-brands.svg';
import linkedin from '../assets/images/linkedin-brands.svg';

function Contact() {
  return (
    <div id="contactMain">
      <h1>Contact</h1>
      <h2>Please contact me below </h2>
      <FontAwesomeIcon icon="envelope" />

      <a href="mailto:hwisoocho@gmail.com?Subject=Hello%20James" target="_top">
        {'  '}
        hwisoocho@gmail.com{' '}
      </a>
      <br />
      <a href="https://github.com/hwisoo" target="_blank">
        <img src={github} />

        <span>Github</span>
      </a>
      <br />
      <a href="https://www.linkedin.com/in/james-h-cho/" target="_blank">
        <img src={linkedin} />

        <span>LinkedIn</span>
      </a>
    </div>
  );
}

export default Contact;
