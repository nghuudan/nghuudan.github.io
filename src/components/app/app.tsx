import React from 'react';
import TopLinks from '../top-links/top-links';
import Experience from '../experience/experience';
import Skills from '../skills/skills';
import Copyright from '../copyright/copyright';
import NavMenu from '../nav-menu/nav-menu';
import styles from './app.module.scss';

const App = () => (
  <article className={styles.app}>
    <section id="top" className={`${styles['scroll-section']} ${styles['top-section']}`}>
      <h1 className={styles['section-title']}>Dan H. Nguyen</h1>
      <h2 className={styles['section-subtitle']}>Software Engineer</h2>
      <TopLinks />
    </section>
    <section id="experience" className={`${styles['scroll-section']} ${styles['experience-section']}`}>
      <h1 className={styles['section-title']}>Experience</h1>
      <Experience />
    </section>
    <section id="skills" className={`${styles['scroll-section']} ${styles['skills-section']}`}>
      <h1 className={styles['section-title']}>Skills</h1>
      <Skills />
    </section>
    <section id="education" className={`${styles['scroll-section']} ${styles['education-section']}`}>
      <h1 className={styles['section-title']}>Education</h1>
    </section>
    <Copyright />
    <NavMenu />
  </article>
);

export default App;
