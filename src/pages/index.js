import { Layout } from '../components';
import styles from '../styles/Home.module.scss';
import { getAge } from '../components/utils';

const Component = () => {
  const age = getAge();
  const githubLink = <a href='https://github.com/melchord'>Github</a>;
  const emailLink = <a href='mailto: mdmngz411@gmail.com'>Email Me!</a>;
  const nextSpan = <span className={styles.nextJs}>Next.js</span>;
  return (
    <Layout title='Melchor Dominguez - Software Engineer'>
      <div className={styles.title}>Melchor Dominguez</div>
      <h2>I'm a {age} year-old developer</h2>
      <h2>who has used {nextSpan}, React, and others.</h2>
      <br />
      <h2>Check out my {githubLink}.</h2>
      <br />
      <h2>Currently on the search for my next project.</h2>
      <h2>Business inquiry? {emailLink}</h2>
      <img src='/owl.gif' />
    </Layout>
  );
};

Component.displayName = 'Home';

export default Component;
