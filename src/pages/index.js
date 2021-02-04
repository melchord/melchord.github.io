import { Alert } from 'reactstrap';

import Layout from '../layouts/main';

import styles from '../styles/Home.module.scss';

const Component = () => (
  <Layout title='Melchor Dominguez - Software Engineer'>
    <div className={styles.title}>Melchor Dominguez</div>
    <hr />
    <Alert color='primary'>TODO: ABOUT ME MODULE</Alert>
    <Alert color='primary'>TODO: BLOGS MODULE</Alert>
    <Alert color='contact'>TODO: CONTACT MODULE</Alert>
  </Layout>
);

Component.displayName = 'Home';

export default Component;
