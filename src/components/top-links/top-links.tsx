import React from 'react';
import styles from './top-links.module.scss';

const TopLinks = () => (
  <nav className={styles['top-links']}>
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
  </nav>
);

export default TopLinks;
