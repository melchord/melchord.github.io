import Layout from '../layouts/main';
import styles from '../styles/Home.module.scss';
import { getAge } from '../utils';

const Component = () => {
  const age = getAge();
  return (
    <Layout title='Melchor Dominguez - Software Engineer'>
      <div className={styles.title}>Melchor Dominguez</div>
      <h2>I'm a {age} year-old developer</h2>
      <h2>who has used Next.js, React, and others.</h2>
      <br />
      <h2>Check out my Github.</h2>
      <br />
      <div>Currently on the search for my next project.</div>
      <div>Business inquiry? Email Me!</div>
      <img src='/owl.gif' />
    </Layout>
  );
};

Component.displayName = 'Home';

export default Component;
