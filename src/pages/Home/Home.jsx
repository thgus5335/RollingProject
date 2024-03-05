import React from 'react';
import LinkButton from '../../components/Button/LinkButton';
import MainBoxFirst from '../../components/Home/MainBoxFirst';
import MainBoxSecond from '../../components/Home/MainBoxSecond';
//import MetaTag from '../MetaTag';
import styles from'./Home.module.css'; // CSS 파일 import
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
