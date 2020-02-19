import React from 'react';

import Head from 'next/head';
import App from 'next/app';
import Router from 'next/router';

import 'typeface-metropolis';
import '@typefaces-pack/typeface-inter';

import * as gtag from '../../lib/gtag';

class Srr extends App {
  componentDidMount() {
    Router.events.on('routeChangeComplete', url => gtag.pageview(url));
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>React Next Boilerplate</title>
        </Head>

        <Component {...pageProps} />

        <style global jsx>{`
          body {
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: Inter;
          }
        `}</style>
      </>
    );
  }
}

export default Srr;
