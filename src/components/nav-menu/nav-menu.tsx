import React from 'react';
import styles from './nav-menu.module.scss';

const navItems = [
  {
    href: '#top',
    icon: 'fa fa-home',
    text: 'Top',
  },
  {
    href: '#experience',
    icon: 'fa fa-briefcase',
    text: 'Experience',
  },
  {
    href: '#skills',
    icon: 'fa fa-tools',
    text: 'Skills',
  },
  {
    href: '#education',
    icon: 'fa fa-graduation-cap',
    text: 'Education',
  },
];

const NavMenu = () => (
  <nav className={styles['nav-menu']}>
    <ul className={styles['nav-list']}>
      {
        navItems.map((item) => (
          <li className={styles['nav-item']} key={item.text}>
            <a className={styles['nav-link']} href={item.href}>
              <i aria-hidden="true" className={`${item.icon} ${styles['nav-icon']}`} />
              <span className={styles['nav-text']}>{item.text}</span>
            </a>
          </li>
        ))
      }
    </ul>
  </nav>
);

export default NavMenu;
