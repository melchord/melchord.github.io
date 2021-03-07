import PropTypes from 'prop-types';

import styles from '../styles/Layout.module.scss';

import Head from 'next/head';

const Component = ({ children, title }) => (
  <div className={styles.layout}>
    <Head>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css2?family=Aguafina+Script&family=Montserrat&display=swap'
      />
      <title>{title}</title>
    </Head>
    {children}
  </div>
);

Component.displayName = 'Layout';

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  title: PropTypes.string,
};

Component.defaultProps = {
  title: 'default title',
};

export default Component;
