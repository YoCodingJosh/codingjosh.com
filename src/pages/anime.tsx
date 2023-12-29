import clsx from 'clsx';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AnimeTile from '@site/src/components/AnimeTile';
import { testAnimeTileDetails } from '@site/src/components/AnimeTile/testData';
import Heading from '@theme/Heading';

import styles from './anime.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
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

export function HomeElement(): JSX.Element {
  return (
    <Layout
      title="Anime!"
      description="CodingJosh's favorite anime and more">
      <HomepageHeader />
      <main>
        <section>
          <div className="container">
            <div className="text--center">
              <Heading as="h2">My Favorite Anime</Heading>
              <p>These are my favorite anime, in no particular order.</p>
              <small>todo: put details in a hover-over</small>
            </div>
          </div>
        </section>
        <div className={clsx("container", styles.wideContainer)}>
          <div className="row">
            {testAnimeTileDetails.map((animeTileDetails) => (
              <div className={clsx('col col--2', styles.colOverride)}>
                <AnimeTile {...animeTileDetails} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default function Home(): JSX.Element {
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => <HomeElement />}
    </BrowserOnly>
  );
}
