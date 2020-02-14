/* eslint-disable max-len */
import React from 'react';

import useSWR from 'swr';

import Header from '../components/Header';
import Banner from '../components/Banner';
import GettingStarted from '../components/GettingStarted';
import Features from '../components/Features';
import Contributing from '../components/Contributing';
import Media from '../components/Media';
import SocialMeta from '../components/SocialMeta';

import { request } from '../utils/request';

function IndexPage() {
  const { data } = useSWR('/repos/react-next-boilerplate/react-next-boilerplate/releases/latest', request);

  return (
    <>
      <SocialMeta
        image="/static/images/home.png"
        title="React Next Boilerplate"
        url="https://reactnextboilerplate.com/"
        description="A basis for reducing the configuration of your projects with Next.js, best development practices and popular libraries in the developer community."
        keywords="react, nextjs, boilerplate, javascript, redux, redux-saga, immer"
      />

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
