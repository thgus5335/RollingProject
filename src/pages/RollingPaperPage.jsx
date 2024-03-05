import styles from './RollingPaperPage.module.css';
import CardList from '../components/RollingPaperPage/CardList';
import Button from '../components/common/Button';
import { useParams } from 'react-router-dom';

const RollingPage = () => {
  const id = useParams();
  console.log(id);

  return (
    <>
      <main>
        <div className={styles.rollingBackground}>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonEdit}>
              <Button size={'medium'} type="outline">
                편집하기
              </Button>
            </div>
          </div>
          <CardList id={id.id} />
        </div>
      </main>
    </>
  );
};

export default RollingPage;
