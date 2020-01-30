import React from 'react';

import Head from 'next/head';
import App from 'next/app';

import 'typeface-metropolis';
import '@typefaces-pack/typeface-inter';

class Srr extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>React Next Boilerplate</title>
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}

export default Srr;
