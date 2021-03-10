import { initializeStore } from '../store';

import Home from './index';

export default function SSR() {
  return <Home />;
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use 'getServerSideProps' or 'getInitialProps'
export const getServerSideProps = () => {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  dispatch({
    type: 'tick',
    light: false,
    lastUpdate: Date.now(),
  });

  return { props: { initialReduxState: reduxStore.getState() } };
};
