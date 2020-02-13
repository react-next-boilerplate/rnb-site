import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { Spectrum, Github } from '@icons-pack/react-simple-icons';

function Nav({ version }) {
  return (
    <nav>
      <Link href="/">
        <a>
          <img src="/static/images/svg/RNB-logo.svg" />
        </a>
      </Link>

      <a href="https://github.com/react-next-boilerplate/react-next-boilerplate/releases" className="version">
        {version}
      </a>

      <div className="spacer" />
      <ul className="navbar">
        <li>
          <a className="link" href="#features">
            Features
          </a>
        </li>

        <li>
          <a className="link" href="https://github.com/react-next-boilerplate/react-next-boilerplate#documentation">
            Docs
          </a>
        </li>

        <li>
          <a
            className="link"
            href="https://github.com/react-next-boilerplate/react-next-boilerplate/archive/master.zip">
            Download
          </a>
        </li>

        <li>
          <a className="link-circle" href="https://github.com/react-next-boilerplate/react-next-boilerplate">
            <Github size={20} />
          </a>
        </li>

        <li>
          <a className="link-circle" href="https://spectrum.chat/react-next-boilerplate">
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

        .version {
          color: #fff;
          font-size: 14px;
          margin-left: 16px;
          font-weight: 200;
          text-decoration: none;
        }

        .version:hover {
          color: rgb(2, 151, 245);
        }
      `}</style>
    </nav>
  );
}

Nav.propTypes = {
  version: PropTypes.string,
};

export default Nav;
