import React from 'react';
import PropTypes from 'prop-types';

import Nav from './nav';

function Header({ version }) {
  return (
    <header className="header-nav">
      <Nav version={version} />

      <style jsx>{`
        header {
          position: sticky;
          top: 0;
          background-color: black;
        }

        .header-nav {
          display: flex;
        }
      `}</style>
    </header>
  );
}

Header.propTypes = {
  version: PropTypes.string,
};

export default Header;
