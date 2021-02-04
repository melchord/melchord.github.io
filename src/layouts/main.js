import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

import Head from 'next/head';

const Component = ({ children, title }) => (
  <>
    <Head>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Aguafina+Script&family=Montserrat&display=swap'
      />
      <title>{title}</title>
    </Head>
    <header>
      <Alert color='primary'>TODO: ADD NAV BAR</Alert>
    </header>
    {children}
    <footer>
      <Alert color='primary'>TODO: ADD FOOTER</Alert>
    </footer>
  </>
);

Component.displayName = 'Layout';

Component.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Component.defaultProps = {
  title: 'default title',
};

export default Component;
