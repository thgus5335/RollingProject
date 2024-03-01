import styles from './CardList.module.css';
import AddCard from './AddCard';
import Card from './Card';

const RollingPage = () => {
  return (
    <div className={styles.cardList}>
      <AddCard />
      <Card mode={'normal'} />
      <Card mode={'edit'} />
    </div>
  );
};

export default RollingPage;
