import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <button>
        <Link to="/home">Home</Link>
      </button>
      <button>
        <Link to="/about">About</Link>
      </button>
      <button>
        <Link to="/projects">Projects</Link>
      </button>
    </div>
  );
}

export default Header;
