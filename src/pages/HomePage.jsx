import React from 'react';
import LinkButton from '../components/common/LinkButton';
import MainBoxFirst from '../components/HomePage/MainBoxFirst';
import MainBoxSecond from '../components/HomePage/MainBoxSecond';
//import MetaTag from '../MetaTag';
import styles from './HomePage.module.css'; // CSS 파일 import
//import Header from '../../components/Header/Header';

export default function Main() {
  return (
    <div className={styles.mainArea}>
      <div className={styles.mainContainer}>
        <MainBoxFirst />
        <MainBoxSecond />
      </div>
      <LinkButton value="구경해보기" link="/list" />
    </div>
  );
}
