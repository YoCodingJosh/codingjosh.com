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
    <>
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
        <div className={styles.links}>
          {malLink && (
            <a href={malLink} target="_blank" rel="noreferrer">
              <img
                src="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"
                alt="MyAnimeList"
                className={clsx(styles.link)}
              />
            </a>
          )}
          {aniListLink && (
            <a href={aniListLink} target="_blank" rel="noreferrer">
              <img
                src="https://anilist.co/img/icons/android-chrome-512x512.png"
                alt="AniList"
                className={clsx(styles.link, styles.aniListLink)}
              />
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default AnimeTile;
