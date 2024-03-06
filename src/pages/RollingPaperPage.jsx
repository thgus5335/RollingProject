import styles from './RollingPaperPage.module.css';
import CardList from '../components/RollingPaperPage/CardList';
import Button from '../components/common/Button';
import HeaderRolling from '../components/RollingPaperPage/HeaderRolling';

const RollingPage = () => {
  const buttonSize = 'medium';

  return (
    <>
      <main>
        <HeaderRolling />
        <div className={styles.rollingBackground}>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonEdit}>
              <Button size={buttonSize} type="outline">
                편집하기
              </Button>
            </div>
          </div>
          <CardList />
        </div>
      </main>
    </>
  );
};

export default RollingPage;
