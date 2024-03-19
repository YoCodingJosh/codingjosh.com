import React, { PropsWithChildren, useState } from 'react';
import clsx from 'clsx';
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

  /**
   * The tech skills that were used in the job.
   */
  skills?: string[];

  /**
   * If the job was a contract job.
   * 
   * Really just displays (Contract) after the job title and contract ended after the end date.
   */
  wasContract?: boolean;
}

const WorkHistoryItem: React.FC<PropsWithChildren<WorkHistoryItemProps>> = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const startDate = new Date(props.startDate);
  const endDate = props.endDate ? new Date(props.endDate) : new Date();
  const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = Math.ceil(totalMonths % 12);

  let dateString = (years > 0 ? `${years} year${(years > 1 ? 's' : '')}` : '') + (years > 0 && months > 0 ? ', ' : '');
  dateString += months > 0 ? `${months} month` + (months > 1 ? 's' : '') : '';

  return (
    <div className={styles.workHistoryItem}>
      <h3 className={styles.jobTitle}>{props.title + (props.wasContract && ' (Contract)' || '')}</h3>
      {props.companyName && <p>{props.companyName}</p>}
      {props.children && <div className={styles.detailsButton} onClick={() => setShowDetails(!showDetails)}>
        <h1 className={`chevron ${showDetails ? 'down' : 'right'}`} ></h1>
      </div>}
      <p>
        <span>
          {props.startDate} &mdash; {`${props.endDate || 'Present'} ${(props.endDate && props.wasContract) ? ' (Contract Ended) ' : ''}`} 
        </span>
        <span>
          { `(${dateString})` }
        </span>
      </p>
      {props.industry && <p>Industry: {props.industry}</p>}
      {props.tldr && <p>Summary: {props.tldr}</p>}
      <span>
        {showDetails && (
          <>
            <hr />
            {props.children}
          </>
        )}
      </span>
      {props.skills && (<div>
        {props.skills.map((skill) => (
          <span key={skill} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
      )}
    </div>
  );
};

export default WorkHistoryItem;
