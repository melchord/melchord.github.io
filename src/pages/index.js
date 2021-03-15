import { useDispatch, useSelector } from 'react-redux';

import { Age, Layout, PreviewPanel, PreviewSelector } from '../components';
import styles from '../styles/Home.module.scss';

const Component = () => {
  const isActive = useSelector((state) => state.active);

  const githubLink = <a href='https://github.com/melchord'>Github</a>;
  const emailLink = <a href='mailto: mdmngz411@gmail.com'>Email Me!</a>;
  const nextSpan = <PreviewSelector type='nextjs' />;
  const reactSpan = <PreviewSelector type='react' />;
  const otherSpan = <PreviewSelector type='others' />;
  return (
    <Layout title='Melchor Dominguez'>
      <div className={styles.title}>Melchor Dominguez</div>
      <h2>
        I'm a <Age /> year-old developer
      </h2>
      <h2>
        who has used {nextSpan}, {reactSpan}, and {otherSpan}.
      </h2>
      <PreviewPanel active={isActive} />
      <br />
      <h2>Check out my {githubLink}.</h2>
      <br />
      <h2>Currently working on finishing this website.</h2>
      <h2>Business inquiry? {emailLink}</h2>
      <img src='/owl.gif' />
      <br />;
    </Layout>
  );
};

Component.displayName = 'Home';

export default Component;
