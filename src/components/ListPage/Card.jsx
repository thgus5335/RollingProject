import styles from './Card.module.css';
import beigePattern from '../../assets/images/pattern-beige.png';
import bluePattern from '../../assets/images/pattern-blue.png';
import purplePattern from '../../assets/images/pattern-purple.png';
import greenPattern from '../../assets/images/pattern-green.png';
import Emoji from '../common/Emoji';
import Profile from '../common/Profile';

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
        <Profile recentMessages={recentMessages} messageCount={messageCount} />
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
