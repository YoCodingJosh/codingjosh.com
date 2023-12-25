import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AnimeTile from '@site/src/components/AnimeTile';
import { testAnimeTileDetails } from '@site/src/components/AnimeTile';
import Heading from '@theme/Heading';

import styles from './anime.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Anime
        </Heading>
        <p className="hero__subtitle">what's my taste?</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Anime!"
      description="CodingJosh's favorite anime and more">
      <HomepageHeader />
      <main>
        <AnimeTile {...testAnimeTileDetails} />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
