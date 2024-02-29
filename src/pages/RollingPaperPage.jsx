import styles from './RollingPaperPage.module.css';
import CardList from '../components/RollingPaperPage/CardList';

const RollingPage = () => {
  return (
    <>
      <header>{/* Header */}</header>
      <main>
        <div className={styles.rollingBackground}>
          <div>
            <button>편집하기</button>
          </div>
          <CardList />
        </div>
      </main>
    </>
  );
};

export default RollingPage;
