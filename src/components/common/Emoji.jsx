import styles from './Emoji.module.css';

const Emoji = ({ emoticon }) => {
  return (
    <>
      {emoticon.map(emoji => (
        <div key={emoji.id} className={styles.emojiBox}>
          <div className={styles.emoji}>
            {emoji.emoji} {emoji.count > 99 ? <span>99+</span> : emoji.count}
          </div>
        </div>
      ))}
    </>
  );
};

export default Emoji;
