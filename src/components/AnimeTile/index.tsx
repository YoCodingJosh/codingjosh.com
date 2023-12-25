import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type AnimeTileDetails = {
  title: string;
  description: string;
  genres: string[];
  image: string;
  malLink: string;
  aniListLink: string;

  // TODO: maybe my rating?
}

export const testAnimeTileDetails: AnimeTileDetails = {
  title: 'Hidamari Sketch',
  description: "For years, Yuno's dreamed of attending Yamabuki Arts High School; but now that she's been accepted, it means the scary prospect of moving away from her home and family for the first time!",
  genres: ['Slice of Life', 'CGDCT', 'Iyashikei', 'School', 'Visual Arts'],
  image: 'https://cdn.myanimelist.net/images/anime/1893/133786l.jpg',
  malLink: 'https://myanimelist.net/anime/1893/Hidamari_Sketch',
  aniListLink: 'https://anilist.co/anime/1852/Hidamari-Sketch/',
};

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
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AnimeTile;
