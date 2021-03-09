import PropTypes from 'prop-types';

import styles from './index.module.scss';

const Component = ({ active, current }) => <div className={styles.previewPanel}></div>;

Component.displayName = 'Layout';

Component.propTypes = {
  active: PropTypes.bool,
  current: PropTypes.string,
};

Component.defaultProps = {
  active: false,
  current: 'Nextjs',
};

export default Component;
