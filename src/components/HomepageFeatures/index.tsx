import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Loves Coding',
    Svg: require('@site/static/img/undraw_developer_activity_re_39tg.svg').default,
    description: (
      <>
        I try to write code every day, whether it's for work or for fun.
      </>
    ),
  },
  {
    title: 'Insert Philosophy Here',
    Svg: require('@site/static/img/undraw_career_progress_ivdb.svg').default,
    description: (
      <>
        Who's that man in the mirror? I don't know, but he's pretty cool.
      </>
    ),
  },
  {
    title: 'Powered by Caffeine',
    Svg: require('@site/static/img/undraw_drink_coffee_v3au.svg').default,
    description: (
      <>
        Soda, coffee, energy drinks, you name it. I'm powered by caffeine. Doesn't make me any less tired or any more productive, but I'm powered by it.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
