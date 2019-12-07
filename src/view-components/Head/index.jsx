import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';


export default function HeadComponent(props) {
  const { translations } = props;
  const {
    appname, description, keywords, title
  } = translations;
  return (
    <Head>
      <title>{title}</title>
      <meta name="application-name" content={appname} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
}

HeadComponent.propTypes = {
  translations: PropTypes.exact({
    appname: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired
};
