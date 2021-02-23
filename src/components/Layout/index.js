import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

function Layout({ version, children }) {
  return (
    <>
      <Header version={version} />

      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  version: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
