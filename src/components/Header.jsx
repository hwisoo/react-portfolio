import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="headerContainer">
      <h1 id="headerMain">James Cho : Portfolio Page</h1>

      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/projects">
        <button>Projects</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
    </div>
  );
}

export default Header;
