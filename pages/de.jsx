import React from 'react';
import PropTypes from 'prop-types';
import App from '../src/view-components/App';
import * as translations from '../src/i18n/de.json';

export default function Index(props) {
  const { trs } = props;
  return <App trs={trs} />;
}

Index.getInitialProps = () => ({ trs: translations.default });

Index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  trs: PropTypes.object.isRequired
};
