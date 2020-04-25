import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Github, Discord } from '@icons-pack/react-simple-icons';

import Nav from './nav';

function Header({ version }) {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="header-nav">
        <Nav version={version} open={open} onOpenMenu={() => setOpen(!open)} />
      </div>

      {open && (
        <ul className="navbar-mobile">
          <li>
            <a
              data-category="Site-Wide Custom Events"
              data-label="Link logo to features"
              className="link"
              href="#features">
              Features
            </a>
          </li>

          <li>
            <a
              data-category="Site-Wide Custom Events"
              data-label="Link logo to Docs"
              className="link"
              href="https://github.com/react-next-boilerplate/react-next-boilerplate#documentation">
              Docs
            </a>
          </li>

          <li>
            <a
              data-category="Site-Wide Custom Events"
              data-label="Link logo to Download"
              className="link"
              href="https://github.com/react-next-boilerplate/react-next-boilerplate/archive/master.zip">
              Download
            </a>
          </li>

          <li>
            <a
              data-category="Site-Wide Custom Events"
              data-label="Link logo to Github"
              className="link-circle"
              href="https://github.com/react-next-boilerplate/react-next-boilerplate">
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
        </ul>
      )}

      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          background-color: black;
        }

        .header-nav {
          display: flex;
        }

        .navbar-mobile {
          display: flex;
          flex-direction: column;
          padding: 16px 0;
          margin: 0;
        }

        li {
          margin: 8px 0;
        }

        .link {
          color: #ffffff;
          text-decoration: none;
          padding: 0.3rem 1rem;
        }

        .link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 0.4375rem;
          cursor: pointer;
          color: #8d8d8d;
          transition: all 0.2s ease;
        }

        .link-active {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 0.4375rem;
          color: #8d8d8d;
        }

        .link-circle {
          color: #ffffff;
          text-decoration: none;
          padding: 0.3rem 1rem;
        }

        .link-circle:hover {
          color: #8d8d8d;
        }
      `}</style>
    </header>
  );
}

Header.propTypes = {
  version: PropTypes.string,
};

export default Header;
