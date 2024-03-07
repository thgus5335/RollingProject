import styles from './CommonSection.module.css';
import Card from './Card';
import forward from '../../assets/icons/forward.svg';
import backward from '../../assets/icons/backward.svg';
import useCardLength from '../../hooks/useCardLength';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CommonSection = ({ title, data }) => {
  const { cardLength } = useCardLength();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextCard = () => {
    if (currentIndex < cardLength - 4) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  const handlePrevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };
  return (
    <section className={styles.commonSection}>
      <h3 className={styles.title}>{title}</h3>
      {!!data.length && (
        <div className={styles.cardFlex} style={{ transform: `translateX(-${currentIndex * 29.5}rem)` }}>
          {data.map(card => (
            <Link to={`/post/${card.id}`} key={card.id}>
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

      {currentIndex !== 0 && (
        <button onClick={handlePrevCard}>
          <img src={backward} alt="이전 카드" className={styles.backward} />
        </button>
      )}
      {cardLength > 4 && currentIndex < cardLength - 4 && (
        <button onClick={handleNextCard}>
          <img src={forward} alt="다음 카드" className={styles.forward} />
        </button>
      )}
    </section>
  );
};

export default CommonSection;
