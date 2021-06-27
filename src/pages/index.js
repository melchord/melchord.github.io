import { useSelector } from 'react-redux';

import { Age, Layout, PreviewPanel, PreviewSelector } from '../components';
import initFirebase from '../firebase/initFirebase';
import readFromCloudFirestore from '../firebase/read';
import writeToCloudFirestore from '../firebase/write';
import styles from '../styles/Home.module.scss';

initFirebase();
writeToCloudFirestore();
readFromCloudFirestore();

const Component = () => {
  const isActive = useSelector((state) => state.active);
  const currentPreview = useSelector((state) => state.currentPreview);

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
      <PreviewPanel active={isActive} current={currentPreview} />
      <br />
      <h2>Check out my {githubLink}.</h2>
      <br />
      <h2>
        Currently working on a Flutter/Dart mobile application, an Advanced Google Analytics
        Certificate, and updating projects.
      </h2>
      <h2>Business inquiry? {emailLink}</h2>
      <img src='/owl.gif' />
      <br />;
    </Layout>
  );
};

Component.displayName = 'Home';

export default Component;
