import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { useEffect } from 'react';

import styles from './server.module.css';

function PageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Server Details</h1>
        <p className="hero__subtitle">Details about your HTTP request</p>
      </div>
    </header>
  );
}

export default function Server(): JSX.Element {
  useEffect(() => {
    fetch('/api/info')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Layout
      title="Server Details"
      description="Details about your HTTP request">
      <PageHeader />
      <main>
        <section>
          <div className="container">
            <div className="text--center">
              <p>HTTP</p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
