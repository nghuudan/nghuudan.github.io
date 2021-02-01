import React from 'react';
import styles from './education.module.scss';

const Education = () => (
  <ul className={styles.education}>
    <li className={styles.college}>
      <h2 className={styles.years}>2001&mdash;2005</h2>
      <h2 className={styles.name}>University of Massachusetts Lowell</h2>
      <h2 className={styles.location}>Lowell, MA</h2>
      <ul className={styles.degree}>
        <li>
          <h3 className={styles['degree-name']}>Bachelor of Science, Information Technology</h3>
          <ul className={styles.achievements}>
            <li className={styles['achievement-text']}>Certificate of Graphic Design and Digital Imaging</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
);

export default Education;
