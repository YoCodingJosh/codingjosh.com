import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function WhoAmI(): JSX.Element {
  return (
    <section className={styles.whoami}>
      <div className="container">
        <div className="row">
          <img src="/img/4970-tohruthink.png" alt="Tohru Thinking" />
          <h1>Who is CodingJosh?</h1>
        </div>
        <div className="row">
          <p>
            I'm a software engineer from the Kansas City. I love coding, anime, gaming, and learning new things.
          </p>
        </div>
        <div className="row">
          <p>
            I'm currently working as a software engineer at a health care software company. I'm also working on starting up my own software company.
          </p>
        </div>
      </div>
    </section>
  );
}
