import React from 'react';

import useSWR from 'swr';

import Header from '../components/Header';
import Banner from '../components/Banner';
import GettingStarted from '../components/GettingStarted';
import Features from '../components/Features';
import Contributing from '../components/Contributing';
import Media from '../components/Media';

import { request } from '../utils/request';

function IndexPage() {
  const { data } = useSWR('/repos/react-next-boilerplate/react-next-boilerplate/releases/latest', request);

  return (
    <>
      <Header version={data?.name} />

      <Banner />

      <GettingStarted />

      <Features />

      <Media />

      <Contributing />
    </>
  );
}

export default IndexPage;
