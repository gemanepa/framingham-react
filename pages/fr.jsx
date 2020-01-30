import React from 'react';
import PropTypes from 'prop-types';
import App from '../src/view-components/App';
import * as translations from '../src/i18n/fr.json';

export default function Index(props) {
  const { tr } = props;
  return <App translations={tr} />;
}

Index.getInitialProps = () => ({ tr: translations.default });

Index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tr: PropTypes.object.isRequired
};
