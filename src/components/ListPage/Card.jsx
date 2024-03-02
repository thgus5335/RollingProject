import styles from './Card.module.css';

const Card = ({ name, messageCount, backgroundImage, backgroundColor, recentMessages = [], emoticon = [] }) => {
  console.log('recent msg:', recentMessages.length);
  const background = backgroundImage ? 'backgroundImage' : backgroundColor;
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})`, zIndex: -2 }}
      className={`${styles[background]} ${styles.cardArea}`}>
      <div className={styles.infoArea}>
        <h3 className={styles.name}>To. {name}</h3>

        {recentMessages && (
          <div className={styles.imageStyle}>
            {recentMessages.slice(0, 3).map(recentMessage => (
              <img key={recentMessage.id} src={recentMessage.profileImageURL} className={styles.profileImage} />
            ))}
            {messageCount > 3 && <div className={styles.plusProfile}>+{messageCount - 3}</div>}
          </div>
        )}

        <p className={styles.countDescription}>
          <span className={styles.strongSpan}>{messageCount}</span>명이 작성했어요!
        </p>
      </div>

      {emoticon && (
        <div className={styles.emojiArea}>
          {emoticon.map(emoji => (
            <div key={emoji.id} className={styles.emoji}>
              {emoji.emoji} {emoji.count}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
