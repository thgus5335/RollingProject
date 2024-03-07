import styles from './Card.module.css';
import beigePattern from '../../assets/images/pattern-beige.png';
import bluePattern from '../../assets/images/pattern-blue.png';
import purplePattern from '../../assets/images/pattern-purple.png';
import greenPattern from '../../assets/images/pattern-green.png';
import Emoji from '../common/Emoji';

const backgroundImagePattern = {
  beige: beigePattern,
  blue: bluePattern,
  purple: purplePattern,
  green: greenPattern,
};

const Card = ({ name, messageCount, backgroundImage, backgroundColor, recentMessages = [], emoticon = [] }) => {
  const background = backgroundImage ? 'backgroundImage' : backgroundColor;

  const backgroundImageStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : `url(${backgroundImagePattern[background]})`,
    zIndex: -2,
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={backgroundImageStyle} className={`${styles[background]} ${styles.cardArea}`}>
      <div className={styles.infoArea}>
        <h3 className={styles.name}>To. {name}</h3>

        {recentMessages && (
          <div className={styles.imageStyle}>
            {recentMessages.map((recentMessage, index) => (
              <img
                key={recentMessage.id}
                src={recentMessage.profileImageURL}
                className={styles.profileImage}
                style={{ left: `${index * -1}rem` }}
              />
            ))}
            {messageCount > 3 && <div className={styles.plusProfile}>+{messageCount - 3}</div>}
          </div>
        )}

        <p className={styles.countDescription}>
          <span className={styles.strongSpan}>{messageCount}</span>명이 작성했어요!
        </p>
      </div>
      {emoticon.length !== 0 && (
        <div className={styles.cardBorderLine}>
          <Emoji emoticon={emoticon} />
        </div>
      )}
    </div>
  );
};

export default Card;
