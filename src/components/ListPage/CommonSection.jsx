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
  // const [width, setWidth] = useState(window.innerWidth);

  // const containerRef = useRef(null);

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

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const isMobile = width < 1200;
  // const style = isMobile ? {} : { transform: `translateX(-${currentIndex * 29.5}rem)` };

  // useEffect(() => {
  //   if (!containerRef.current) {
  //     return;
  //   }

  //   if (isMobile) {
  //     containerRef.current.scrollLeft = currentIndex === 0 ? 0 : currentIndex * 295;
  //   } else {
  //     containerRef.current.scrollLeft = 0;
  //   }
  // }, [currentIndex, isMobile]);

  return (
    <section className={styles.commonSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.container}>
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
      </div>

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
