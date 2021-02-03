import PropTypes from 'prop-types';

import '../styles/globals.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
