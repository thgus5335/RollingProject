import React from 'react';
import styles from './ImageList.module.css';

export default function ImageList({
  recentMessages,
  messageCount,
  usePostPage = false
}) {
  return usePostPage ? (
    <div className={styles.imageListDisplay}>
      {recentMessages.map(message => (
        <img
          className={styles.image}
          src={message.profileImageURL}
          key={message.id}
          alt={message.sender}
        />
      ))}
      {messageCount > 3 && (
        <div className={styles.restMessageCount}>{`+${messageCount - 3}`}</div>
      )}
    </div>
  ) : (
    <div className={styles.imageList}>
      {recentMessages.map(message => (
        <img
          className={styles.image}
          src={message.profileImageURL}
          key={message.id}
          alt={message.sender}
        />
      ))}
      {messageCount > 3 && (
        <div className={styles.restMessageCount}>{`+${messageCount - 3}`}</div>
      )}
    </div>
  );
}
