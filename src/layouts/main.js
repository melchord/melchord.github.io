import { Alert } from 'reactstrap';

import Head from 'next/head';

export default ({ children, title = 'This is the default title' }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <Alert color='primary'>TODO: ADD NAV BAR</Alert>
    </header>
  </>
);
