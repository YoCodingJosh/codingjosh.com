import React, { PropsWithChildren, useState } from 'react';
import styles from './styles.module.css';

interface WorkHistoryItemProps {
  /**
   * The title of the job.
   */
  title: string;

  /**
   * The company name.
   * 
   * Optional, use the `jobIndustry` prop if you want to not show the company name.
   */
  companyName?: string;

  /**
   * The industry that the job is in.
   * 
   * This can be used if we want to not show the company name.
   */
  industry?: string;

  /**
   * The start date of the job.
   */
  startDate: string;

  /**
   * The end date of the job.
   */
  endDate?: string;

  /**
   * A short description of the job.
   */
  tldr?: string;
}

const WorkHistoryItem: React.FC<PropsWithChildren<WorkHistoryItemProps>> = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={styles.workHistoryItem}>
      <h3 className={styles.jobTitle}>{props.title}</h3>
      {props.companyName && <p>{props.companyName}</p>}
      <button className={styles.detailsButton} onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide' : 'Show'} Details
      </button>
      <p>
        <span>
          {props.startDate} &mdash; {props.endDate || 'Present'}
        </span>
      </p>
      {props.industry && <p>Industry: {props.industry}</p>}
      {props.tldr && <p>Summary: {props.tldr}</p>}
      {showDetails && (
        <>
          <hr></hr>
          {props.children}
        </>
      )}
    </div>
  );
};

export default WorkHistoryItem;
