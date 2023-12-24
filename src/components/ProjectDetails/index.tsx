import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Admonition from '@theme/Admonition';
import styles from './styles.module.css';

interface ProjectDetailsProps {
  /**
   * The title of the project.
   */
  title: string;

  /**
   * The description of the project.
   */
  description: string;

  /**
   * The link to the project.
   */
  projectLink?: string;

  /**
   * The link to the GitHub repository of the project.
   */
  githubLink?: string;

  /**
   * Whether the project is coming soon.
   */
  comingSoon?: boolean;

  /**
   * Whether the project is no longer supported.
   */
  unsupported?: boolean;

  /**
   * A custom info string.
   */
  customInfoString?: string;

  /**
   * The technologies used in the project.
   * Will show up as a list of badges.
   */
  technologies?: string[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  projectLink,
  githubLink,
  comingSoon,
  unsupported,
  customInfoString,
  technologies,
}) => {
  return (
    <div className={styles.projectDetails}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
      {comingSoon && (
        <Admonition type="info">
          This project is coming soon.
        </Admonition>
      )}
      {unsupported && (
        <Admonition type="warning">
          This project is no longer supported.
        </Admonition>
      )}
      {customInfoString && (
        <Admonition type="info">
          {customInfoString}
        </Admonition>
      )}
      {technologies && (
        <div className={styles.technologies}>
          <span>Technologies used: </span>
          {technologies.map((technology) => (
            <span className={styles.technology}>{technology}</span>
          ))}
        </div>
      )}
      {projectLink && (
        <a href={projectLink} target="_blank"className={clsx(styles.link, styles.projectLink)}>
          Visit Project
        </a>
      )}
      {githubLink && (
        <a href={githubLink} target="_blank" className={clsx(styles.link, styles.githubLink)}>
          GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectDetails;
