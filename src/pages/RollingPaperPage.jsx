import styles from './RollingPaperPage.module.css';
import CardList from '../components/RollingPaperPage/CardList';
import Button from '../components/common/Button';
// import HeaderRolling from '../components/RollingPaperPage/HeaderRolling';
import { useParams } from 'react-router-dom';

const RollingPage = () => {
  const buttonSize = 'medium';
  const params = useParams();

  return (
    <>
      {/* <HeaderRolling /> */}
      <main>
        <div className={styles.rollingBackground}>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonEdit}>
              <Button size={buttonSize} type="outline">
                편집하기
              </Button>
            </div>
          </div>
          <CardList />
          {params.id}
        </div>
      </main>
    </>
  );
};

export default RollingPage;
