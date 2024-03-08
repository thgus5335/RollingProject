import styles from './Emoji.module.css';

const Emoji = ({ emoticon }) => {
  return (
    <>
      {emoticon.map(emoji => (
        <div key={emoji.id} className={styles.emoji}>
          {emoji.emoji} {emoji.count}
        </div>
      ))}
    </>
  );
};

export default Emoji;
