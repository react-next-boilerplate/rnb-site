import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

function SocialMeta({ title, description, image, url, keywords }) {
  return (
    <Head>
      {title && <meta name="og:title" content={title} />}
      <meta name="og:site_name" content="React Next Boilerplate" />
      {url && <meta name="og:url" content={url} />}
      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      <meta name="og:type" content="website" />
      {image && <meta name="og:image" content={`https://www.reactnextboilerplate.com${image}`} />}
      <meta name="twitter:site" content="@RNBoilerplate" />
      {image && <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />}
      {url && <meta name="twitter:url" content={url} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={`https://www.reactnextboilerplate.com${image}`} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  );
}

SocialMeta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  keywords: PropTypes.string,
};

export default SocialMeta;
