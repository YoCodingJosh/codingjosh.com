import React from 'react';
import Tilt from 'react-parallax-tilt';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import { AnimeTileDetails } from './details';

const AnimeTile: React.FC<AnimeTileDetails> = ({
  title,
  description,
  genres,
  image,
  malLink,
  aniListLink,
}) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Tilt>
          <img
            src={image}
            alt={title}
            className={styles.animeTile}
          />
        </Tilt>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        {description && <p>{description}</p>}
        <div className={styles.genres}>
          {genres.map((genre) => (
            <span className={styles.genre}>{genre}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimeTile;
