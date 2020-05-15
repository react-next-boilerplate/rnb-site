import React from 'react';
import PropTypes from 'prop-types';

// import { useRouter } from 'next/router';

import Header from '../Header';
// import BannerEvent from '../BannerEvent';

function Layout({ version, children }) {
  // const router = useRouter();
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

//  {router.pathname !== '/events/student-developer' && <BannerEvent />}
