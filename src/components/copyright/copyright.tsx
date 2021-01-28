import React from 'react';
import styles from './copyright.module.scss';

const Copyright = () => {
  const year = new Date().getFullYear();

  return (
    <p className={styles.copyright}>
      Copyright &copy;
      {` ${year} `}
      Dan H. Nguyen
    </p>
  );
};

export default Copyright;
