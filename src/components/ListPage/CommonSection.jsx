import styles from './CommonSection.module.css';
import Card from './Card';
import forward from '../../assets/icons/forward.svg';
import backward from '../../assets/icons/backward.svg';
import useCardLength from '../../hooks/useCardLength';
import { Link } from 'react-router-dom';

const CommonSection = ({ title, data, handleForward, handleBackward, offset }) => {
  const { cardLength } = useCardLength();

  const onClickBackward = () => {
    handleBackward(offset);
  };

  const onClickForward = () => {
    handleForward(offset);
  };

  return (
    <section className={styles.commonSection}>
      <h3 className={styles.title}>{title}</h3>
      {Array.isArray(data) && data.length && (
        <div className={styles.cardFlex}>
          {data.map(card => (
            <Link to={`/post/${card.id}`} key={card.id} style={{ textDecoration: 'none' }}>
              <Card
                name={card.name}
                messageCount={card.messageCount}
                backgroundImage={card.backgroundImageURL}
                backgroundColor={card.backgroundColor}
                emoticon={card.topReactions}
                recentMessages={card.recentMessages}
              />
            </Link>
          ))}
        </div>
      )}

      {offset !== 0 && (
        <button onClick={onClickBackward}>
          <img src={backward} alt="이전 카드" className={styles.backward} />
        </button>
      )}
      {cardLength > 4 && offset < cardLength - 4 && (
        <button onClick={onClickForward}>
          <img src={forward} alt="다음 카드" className={styles.forward} />
        </button>
      )}
    </section>
  );
};

export default CommonSection;
