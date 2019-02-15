import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="headerContainer">
      <style jsx>
        {`
          body {
            margin: 0;
          }
          div {
            text-align: center;
          }

          #headerContainer {
            margin-bottom: 20px;
          }

          #headerMain {
            font-size: 2.5rem;
            padding: 40px;
            background-color: #003399;
            color: #fff;
            margin: 0;
          }
          button {
            font-size: 1.4vw;
            color: #fff;
            min-height: 50px;
            background-color: #4080bf;
            width: 10vw;
            height: 6vh;
            border-radius: 10%;
            margin: 10px;
          }
          .grid {
            display: grid;
            grid-template-columns: 20vw 20vw 20vw 20vw;
            grid-gap: 20px;
          }
        `}
      </style>
      <h1 id="headerMain">James Cho : Portfolio Page</h1>

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
