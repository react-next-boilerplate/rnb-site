import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import Header from '../Header';
import BannerEvent from '../BannerEvent';

function Layout({ version, children }) {
  const router = useRouter();
  const isShowBannerEvent = process?.env?.NEXT_PUBLIC_IS_ENABLE_EVENT_SDW === 'AVAILABLE' || false;

  return (
    <>
      {router.pathname !== '/events/student-developer' && isShowBannerEvent && <BannerEvent />}
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
