/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { Github, Discord, Twitter } from '@icons-pack/react-simple-icons';

function Nav({ version, onOpenMenu, open }) {
  return (
    <nav>
      <Link href="/">
        <a data-category="Site-Wide Custom Events" data-label="Link logo to home">
          <img aria-label="React Next Boilerplate Logo" alt="logo" src="/static/images/svg/RNB-logo.svg" />
        </a>
      </Link>

      <a
        data-category="Site-Wide Custom Events"
        data-label="Link logo to version"
        href="https://github.com/react-next-boilerplate/react-next-boilerplate/releases"
        className="version">
        {version}
      </a>

      <div className="spacer" />

      <button aria-label="menu" type="button" className="menu" onClick={onOpenMenu}>
        {open ? (
          <img aria-label="image for menu close" src="/static/images/svg/close.svg" alt="menu close" />
        ) : (
          <img aria-label="image for menu open" src="/static/images/svg/menu.svg" alt="menu open" />
        )}
      </button>

      <ul className="navbar">
        <li>
          <Link href="/#features">
            <a data-category="Site-Wide Custom Events" data-label="Link features" className="link">
              Features
            </a>
          </Link>
        </li>

        <li>
          <a
            data-category="Site-Wide Custom Events"
            data-label="Link Docs"
            className="link"
            href="https://github.com/react-next-boilerplate/react-next-boilerplate#documentation">
            Docs
          </a>
        </li>

        <li>
          <a
            href="https://github.com/react-next-boilerplate/react-next-boilerplate/archive/master.zip"
            data-category="Site-Wide Custom Events"
            data-label="Link Download"
            className="link">
            Download
          </a>
        </li>

        <li>
          <a
            href="https://github.com/react-next-boilerplate/react-next-boilerplate"
            data-category="Site-Wide Custom Events"
            data-label="Link Github"
            className="link-circle">
            <Github size={20} />
          </a>
        </li>

        <li>
          <a
            href="https://discord.gg/ANbWXGs"
            data-category="Site-Wide Custom Events"
            data-label="Link Discord"
            className="link-circle">
            <Discord size={20} />
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/RNBoilerplate"
            data-category="Site-Wide Custom Events"
            data-label="Link twitter"
            className="link-circle twitter">
            <Twitter size={20} />
          </a>
        </li>
      </ul>
      <style jsx>{`
        nav {
          width: 100%;
          height: 4rem;
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

        .twitter {
          margin: 0;
          margin-left: 1rem;
          padding-right: 0;
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

        .menu {
          display: none;
          align-items: center;
          justify-content: center;
          position: relative;
          background-color: transparent;
          outline: 0;
          border: 0;
          margin: 0;
          border-radius: 0;
          padding: 0;
          cursor: pointer;
          user-select: none;
          vertical-align: middle;
          text-decoration: none;
          appearance: none;
          color: #fff;
        }

        @media screen and (max-width: 960px) {
          .navbar {
            display: none;
          }

          .menu {
            display: inline-flex;
          }
        }
      `}</style>
    </nav>
  );
}

Nav.propTypes = {
  version: PropTypes.string,
  onOpenMenu: PropTypes.func,
  open: PropTypes.bool,
};

export default Nav;
