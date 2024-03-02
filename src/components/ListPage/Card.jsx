import styles from './Card.module.css';

const Card = ({ name, messageCount, background, recentMessages = [], emoticon = [] }) => {
  console.log(recentMessages);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'cover',
        color: 'white',
      }}
      className={`${styles[background]} ${styles.cardArea}`}>
      <div className={styles.infoArea}>
        <h3 className={styles.name}>To. {name}</h3>

        {recentMessages &&
          (recentMessages.length <= 3 ? (
            <div className={styles.imageStyle}>
              {recentMessages.map(recentMessage => (
                <img key={recentMessage.id} src={recentMessage.profileImageURL} className={styles.profileImage} />
              ))}
            </div>
          ) : (
            <div className={styles.imageStyle}>
              {recentMessages.slice(0, 3).map(recentMessage => (
                <img key={recentMessage.id} src={recentMessage.profileImageURL} />
              ))}
              <div className={styles.plusProfile}>+{recentMessages.length - 3}</div>
            </div>
          ))}

        <p>{messageCount}명이 작성했어요!</p>
      </div>

      {emoticon && (
        <div className={styles.imoArea}>
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