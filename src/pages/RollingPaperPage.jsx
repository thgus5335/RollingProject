import styles from './RollingPaperPage.module.css';
import CardList from '../components/RollingPaperPage/CardList';
import Button from '../components/common/Button';

const RollingPage = () => {
  const buttonSize = 'small';

  return (
    <>
      <header>{/* Header */}</header>
      <main>
        <div className={styles.rollingBackground}>
          <div className={styles.buttonContainer}>
            <Button size={buttonSize} width={7.5}>
              편집하기
            </Button>
          </div>
          <CardList />
        </div>
      </main>
    </>
  );
};

export default RollingPage;
