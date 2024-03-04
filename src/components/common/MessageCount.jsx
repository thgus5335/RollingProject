import React from 'react';
import styles from './MessageCount.module.css';

export default function MessageCount({ messageCount }) {
  return (
    <div className={styles.messageCount}>
      <span className={styles.count}>{messageCount}</span>명이 작성했어요!
    </div>
  );
}
