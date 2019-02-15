import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>
        {`
          div {
            text-align: center;
          }

          button {
            font-size: 2vw;
            color: #fff;
            background-color: #003399;
            width: 10vw;
            height: 6vh;
            border-radius: 5%;
            margin: 10px;
          }
        `}
      </style>
      <h1>James Cho : Portfolio Page</h1>

      <Link to="/home">
        <button>Home </button>
      </Link>

      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/projects">
        <button>Projects</button>
      </Link>
    </div>
  );
}

export default Header;
