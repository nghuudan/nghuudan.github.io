import React from 'react';
import Copyright from '../copyright/copyright';
import NavMenu from '../nav-menu/nav-menu';
import styles from './app.module.scss';

const App = () => (
  <article className={styles.app}>
    <section id="top" className={`${styles['scroll-section']} ${styles['top-section']}`}>
      <h1 className={styles['section-title']}>Dan H. Nguyen</h1>
      <h2 className={styles['section-subtitle']}>Software Engineer</h2>
      <p className={styles.links}>
        <a
          className={styles['external-link']}
          href="mailto:nghuudan@gmail.com"
        >
          <i aria-hidden="true" className={`${'fa fa-envelope'} ${styles['link-icon']}`} />
          Email
        </a>
        <a
          className={styles['external-link']}
          href="https://github.com/nghuudan"
          rel="noreferrer"
          target="_blank"
        >
          <i aria-hidden="true" className={`${'fab fa-github'} ${styles['link-icon']}`} />
          GitHub
        </a>
        <a
          className={styles['external-link']}
          href="https://linkedin.com/in/dan-h-nguyen"
          rel="noreferrer"
          target="_blank"
        >
          <i aria-hidden="true" className={`${'fab fa-linkedin'} ${styles['link-icon']}`} />
          LinkedIn
        </a>
      </p>
    </section>
    <section id="experience" className={`${styles['scroll-section']} ${styles['experience-section']}`}>
      <h1 className={styles['section-title']}>Experience</h1>
    </section>
    <section id="skills" className={`${styles['scroll-section']} ${styles['skills-section']}`}>
      <h1 className={styles['section-title']}>Skills</h1>
    </section>
    <section id="education" className={`${styles['scroll-section']} ${styles['education-section']}`}>
      <h1 className={styles['section-title']}>Education</h1>
    </section>
    <Copyright />
    <NavMenu />
  </article>
);

export default App;
