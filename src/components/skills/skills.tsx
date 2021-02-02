import React from 'react';
import styles from './skills.module.scss';

export interface Skill {
  name: string;
  value: string;
}

export interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => (
  <ul className={styles.skills}>
    {
      skills.map((skill: Skill) => (
        <li className={styles['skill-group']} key={skill.name}>
          <h2 className={styles['skill-name']}>{skill.name}</h2>
          <p className={styles['skill-value']}>{skill.value}</p>
        </li>
      ))
    }
  </ul>
);

export default Skills;
