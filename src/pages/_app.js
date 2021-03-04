import PropTypes from 'prop-types';

import '../node_modules/bootstrap/scss/bootstrap.scss';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
