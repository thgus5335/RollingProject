import styles from './CardList.module.css';
import AddCard from './AddCard';
import Card from './Card';

const RollingPage = () => {
  return (
    <div className={styles.cardList}>
      <div className={styles.cardContainer}>
        <AddCard />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
        <Card mode={'normal'} />
      </div>
    </div>
  );
};

export default RollingPage;
