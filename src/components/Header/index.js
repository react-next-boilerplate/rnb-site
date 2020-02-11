import React from 'react';

import Nav from './nav';

function Header() {
  return (
    <header className="header-nav">
      <Nav />

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

export default Header;
