import React from 'react';
import styles from './nav-menu.module.scss';

const NavMenu = () => (
  <nav className={styles['nav-menu']}>
    <ul className={styles['nav-list']}>
      <li className={styles['nav-item']}>
        <a className={styles['nav-link']} href="#top">
          <i aria-hidden="true" className={`fa fa-home ${styles['nav-icon']}`} />
          <span className={styles['nav-text']}>Top</span>
        </a>
      </li>
      <li className={styles['nav-item']}>
        <a className={styles['nav-link']} href="#experience">
          <i aria-hidden="true" className={`fa fa-briefcase ${styles['nav-icon']}`} />
          <span className={styles['nav-text']}>Experience</span>
        </a>
      </li>
      <li className={styles['nav-item']}>
        <a className={styles['nav-link']} href="#skills">
          <i aria-hidden="true" className={`fa fa-tools ${styles['nav-icon']}`} />
          <span className={styles['nav-text']}>Skills</span>
        </a>
      </li>
      <li className={styles['nav-item']}>
        <a className={styles['nav-link']} href="#education">
          <i aria-hidden="true" className={`fa fa-graduation-cap ${styles['nav-icon']}`} />
          <span className={styles['nav-text']}>Education</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default NavMenu;
