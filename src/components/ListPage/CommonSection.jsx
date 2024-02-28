import styles from './CommonSection.module.css';
import Card from './Card';

const CommonSection = ({ title, data }) => {
  return (
    <section className={styles.commonSection}>
      <h3>{title}</h3>
      {Array.isArray(data) && data.length && (
        <div className={styles.cardFlex}>
          {data.map(card => (
            <Card
              key={card.id}
              name={card.name}
              messageCount={card.messageCount}
              color={card.backgroundColor}
              emoticon={card.topReactions}
              recentMessages={card.recentMessages}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CommonSection;
