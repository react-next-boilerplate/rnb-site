import React from 'react';
import { Spectrum, Github } from '@icons-pack/react-simple-icons';

function Nav() {
  return (
    <nav>
      <a href="/">
        <img src="/static/images/svg/RNB-logo.svg" />
      </a>

      <div className="spacer" />

      <ul className="navbar">
        <li>
          <a className="link" href="/">
            Features
          </a>
        </li>

        <li>
          <a className="link" href="/">
            Learn
          </a>
        </li>

        <li>
          <a className="link" href="/">
            Docs
          </a>
        </li>

        <li>
          <a className="link-circle" href="/">
            <Github size={20} />
          </a>
        </li>

        <li>
          <a className="link-circle" href="/">
            <Spectrum size={20} />
          </a>
        </li>
      </ul>

      <style jsx>{`
        nav {
          width: 100%;
          margin: 0 auto;
          padding: 0 1rem;
          max-width: 1024px;
          display: flex;
          align-items: center;
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

        .link {
          color: #ffffff;
          text-decoration: none;
          margin: 1rem;
          padding: 0.3rem 1rem;
        }

        .link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 0.4375rem;
          cursor: pointer;
          color: #8d8d8d;
          transition: all 0.2s ease;
          margin: 1rem;
        }

        .link-active {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 0.4375rem;
          color: #8d8d8d;
          margin: 1rem;
        }

        .link-circle {
          color: #ffffff;
          text-decoration: none;
          margin: 1rem;
          padding: 0.3rem 1rem;
        }

        .link-circle:hover {
          color: #8d8d8d;
        }

        .spacer {
          flex: 1 1 auto;
        }
      `}</style>
    </nav>
  );
}

export default Nav;
