import React from 'react';

import { Spectrum, Github } from '@icons-pack/react-simple-icons';

function Header() {
  return (
    <header className="header-nav">
      <nav>
        <ul className="navbar">
          <li>
            <a className="link" href="/">
              Features
            </a>
          </li>

          <li className="item">
            <a className="link" href="/">
              Learn
            </a>
          </li>

          <li className="item">
            <a className="link" href="/">
              Docs
            </a>
          </li>

          <li className="item">
            <a className="link" href="/">
              <Github size={16} />
            </a>
          </li>

          <li className="item">
            <a className="link" href="/">
              <Spectrum size={16} />
            </a>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          background-color: black;
        }

        .header-nav {
          display: flex;
        }

        nav {
          width: 100%;
          margin: 0 auto;
          padding: 0 1rem;
          max-width: 1024px;
        }

        ul {
          margin: 0;
          list-style: none;
        }

        .navbar {
          display: flex;
          align-items: center;
          height: 4rem;
          font-size: 1rem;
        }

        .item {
          margin: 1rem;
        }

        .link {
          color: #ffffff;
        }
      `}</style>
    </header>
  );
}

export default Header;
