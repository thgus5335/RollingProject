import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import styles from './HomePage.module.css'; // CSS 파일 import
import Header from '../components/common/Header';
import MainBox from '../components/HomePage/MainBox';

export default function Main() {
  return (
    <>
      <Header />
      <div className={styles.mainArea}>
        <div className={styles.mainContainer}>
          <MainBox type="first" />
          <MainBox type="second" />
          <Link to="/list" className={styles.button}>
            <Button size="large">구경해보기</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
