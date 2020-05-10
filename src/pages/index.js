/* eslint-disable max-len */
import React from 'react';

import useSWR from 'swr';

import Layout from '../components/Layout';

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
    <Layout version={data?.name}>
      <SocialMeta
        image="/static/images/shared.png"
        title="React Next Boilerplate"
        url="https://www.reactnextboilerplate.com"
        description="A basis for reducing the configuration of your projects with Next.js, best development practices and popular libraries in the developer community."
        keywords="react-next-boilerplate, react, nextjs, boilerplate, javascript, redux, redux-saga, immer"
      />

      <Banner />

      <GettingStarted />

      <Features />

      <Media />

      <Contributing />
    </Layout>
  );
}

export default IndexPage;
