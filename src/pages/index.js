import { useDispatch, useSelector } from 'react-redux';

import { Layout, PreviewPanel } from '../components';
import { useInterval } from '../components/utils';
import styles from '../styles/Home.module.scss';
import { getAge } from '../components/utils';

const Component = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector((state) => state.lastUpdate);

  let age = getAge(currentDate);
  // Tick the time every second
  useInterval(() => {
    dispatch({
      type: 'tick',
      light: true,
      lastUpdate: Date.now(),
    });
    age = getAge();
  }, [1000]);

  const githubLink = <a href='https://github.com/melchord'>Github</a>;
  const emailLink = <a href='mailto: mdmngz411@gmail.com'>Email Me!</a>;
  const nextSpan = <span className={styles.nextJs}>Next.js</span>;
  const reactSpan = <span className={styles.react}>React</span>;
  const otherSpan = <span className={styles.other}>others</span>;
  return (
    <Layout title='Melchor Dominguez - Software Engineer'>
      <div className={styles.title}>Melchor Dominguez</div>
      <h2>I'm a {age} year-old developer</h2>
      <h2>
        who has used {nextSpan}, {reactSpan}, and {otherSpan}.
      </h2>
      <PreviewPanel />
      <br />
      <h2>Check out my {githubLink}.</h2>
      <br />
      <h2>Currently on the search for my next project.</h2>
      <h2>Business inquiry? {emailLink}</h2>
      <img src='/owl.gif' />
      <br />;
    </Layout>
  );
};

Component.displayName = 'Home';

export default Component;
