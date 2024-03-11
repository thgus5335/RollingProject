import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import styles from './NotFoundPage.module.css';
import Header from '../components/common/Header';
import NotFound from '../assets/images/not-found.gif';

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <main className={styles.notFound}>
        <div className={styles.notFoundContainer}>
          <h1 className={styles.notFoundNumber}>404</h1>
          <h3 className={styles.notFoundTitle}>페이지를 찾을 수 없어요 😥</h3>
          <img className={styles.notFoundImage} src={NotFound} />
          <div className={styles.button}>
            <Link to="/">
              <Button size="large">메인 페이지로 바로 가기</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFoundPage;
