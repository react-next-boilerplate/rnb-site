import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

function SocialMeta({ title, description, image, url, keywords }) {
  return (
    <Head>
      <meta name="twitter:site" content="@zeithq" />
      <meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
      {title && <meta name="og:title" content={title} />}
      {url && <meta name="og:url" content={url} />}
      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      {image && <meta name="og:image" content={`https://www.reactnextboilerplate.com/${image}`} />}
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
