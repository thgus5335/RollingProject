import React from 'react';
import styles from './EmojiList.module.css';

export default function EmojiList({ topReactions, isSmall = false }) {
  const reactions = isSmall ? topReactions.slice(0, 6) : topReactions;
  const reactionList = reactions.map((reaction, index) => (
    <div className={styles.emojiCount} key={index}>
      <p>{reaction.emoji}</p>
      <p>{reaction.count}</p>
    </div>
  ));
  return <div className={styles.emojiList}>{reactionList}</div>;
}