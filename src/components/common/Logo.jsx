import React from 'react';
import logoImage from '../../assets/icons/logo.svg';
import styles from './Logo.module.css'; // CSS 파일 import

export default function Logo() {
  return (
    <div className={styles.logoStyle}>
      <div className={styles.logoImage}>
        <img src={logoImage} alt="Logo" />
      </div>
    </div>
  );
}
