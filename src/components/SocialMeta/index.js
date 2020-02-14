import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

function SocialMeta({ title, description, image, url, keywords }) {
  return (
    <Head>
      {title && <meta name="title" content={title} />}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      <meta property="og:site_name" content="React Next Boilerplate" />
      {url && <meta property="og:url" content={url} />}
      {description && <meta property="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      {image && <meta property="og:image" content={`https://www.reactnextboilerplate.com${image}`} />}
      <meta property="twitter:site" content="@RNBoilerplate" />
      {image && <meta property="twitter:card" content={image ? 'summary_large_image' : 'summary'} />}
      {url && <meta property="twitter:url" content={url} />}
      {title && <meta property="twitter:title" content={title} />}
      {description && <meta property="twitter:description" content={description} />}
      {image && <meta property="twitter:image" content={`https://www.reactnextboilerplate.com${image}`} />}
      {keywords && <meta property="keywords" content={keywords} />}
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
