import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Admonition from '@theme/Admonition';
import styles from './styles.module.css';

interface ProjectDetailsProps {
  title: string;
  description: string;
  projectLink?: string;
  githubLink?: string;
  comingSoon?: boolean;
  unsupported?: boolean;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  projectLink,
  githubLink,
  comingSoon,
  unsupported,
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
      {projectLink && (
        <a href={projectLink} className={clsx(styles.link, styles.projectLink)}>
          Visit Project
        </a>
      )}
      {githubLink && (
        <a href={githubLink} className={clsx(styles.link, styles.githubLink)}>
          GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectDetails;
