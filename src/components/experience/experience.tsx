import React from 'react';
import { data } from './experience-data.json';
import styles from './experience.module.scss';

export interface JobExperience {
  begin: string;
  end: string;
  company: string;
  location: string;
  position: string;
  achievements: string[];
}

const Experience = () => (
  <ul className={styles.experience}>
    {
      data.map((job: JobExperience) => (
        <li className={styles.company} key={job.begin}>
          <h2 className={styles['company-years']}>
            {job.begin}
            &mdash;
            {job.end}
          </h2>
          <h2 className={styles['company-name']}>{job.company}</h2>
          <h2 className={styles['company-location']}>{job.location}</h2>
          <ul className={styles.position}>
            <li>
              <h3 className={styles['position-name']}>{job.position}</h3>
              <ul className={styles.achievements}>
                {
                  job.achievements.map((achievement) => (
                    <li className={styles['achievement-text']} key={achievement}>{achievement}</li>
                  ))
                }
              </ul>
            </li>
          </ul>
        </li>
      ))
    }
  </ul>
);

export default Experience;
