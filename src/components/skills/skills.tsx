import React from 'react';
import { data } from './skills-data.json';
import styles from './skills.module.scss';

const Skills = () => (
  <ul className={styles.skills}>
    {
      data.map((skill) => (
        <li className={styles['skill-group']} key={skill.name}>
          <h2 className={styles['skill-name']}>{skill.name}</h2>
          <p className={styles['skill-value']}>{skill.value}</p>
        </li>
      ))
    }
  </ul>
);

export default Skills;
