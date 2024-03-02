import styles from './CommonSection.module.css';
import Card from './Card';
import forward from '../../assets/icons/forward.svg';
import backward from '../../assets/icons/backward.svg';
import useCardLength from '../../hooks/useCardLength';

const CommonSection = ({ title, data, handleForward, handleBackward, offset }) => {
  const { cardLength } = useCardLength();
  console.log('card', cardLength);

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
            <Card
              key={card.id}
              name={card.name}
              messageCount={card.messageCount}
              background={card.backgroundImageURL || card.backgroundColor}
              emoticon={card.topReactions}
              recentMessages={card.recentMessages}
            />
          ))}
        </div>
      )}

      {offset !== 0 && (
        <button onClick={onClickBackward}>
          <img src={backward} alt="이전 카드" className={styles.backward} />
        </button>
      )}
      {
        <button onClick={onClickForward}>
          <img src={forward} alt="다음 카드" className={styles.forward} />
        </button>
      }
    </section>
  );
};

export default CommonSection;
