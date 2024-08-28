'use client';
import React from 'react';
import ErrorIcon from 'img/ErrorIcon.svg';
import styles from './index.module.scss';

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div className={styles.fallback}>
      <ErrorIcon className={styles.imgFB} />
      <h1 className={styles.h1FB}> Oops, something went wrong!</h1>
      <p className={styles.pFB}></p>
      <button onClick={resetErrorBoundary} className={styles.btnFB}>
        Try again
      </button>
    </div>
  );
}
export default Fallback;
