import styles from './CardList.module.css';
import Card from './Card';

const RollingPage = () => {
  return (
    <div className={styles.cardList}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default RollingPage;
