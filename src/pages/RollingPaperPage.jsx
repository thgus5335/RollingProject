import styles from './RollingPaperPage.module.css';
import CardList from '../components/RollingPaperPage/CardList';
import Button from '../components/common/Button';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRollingPaper } from '../apis/rollingPaperAPI';

const RollingPage = () => {
  const id = useParams();
  const [rollingInfo, setRollingInfo] = useState([]);
  const { backgroundColor, backgroundImageURL } = rollingInfo;
  const background = backgroundImageURL ? 'imageBackground' : backgroundColor;

  const fetchData = async id => {
    const response = await getRollingPaper(id);
    setRollingInfo(response);
  };

  useEffect(() => {
    fetchData(id.id);
  }, []);

  console.log(rollingInfo);

  return (
    <main>
      <div
        className={`${styles.rollingBackground} ${styles[background]}`}
        style={{ backgroundImage: `url(${backgroundImageURL})` }}></div>
      <div className={styles.rollingContainer}>
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
  );
};

export default RollingPage;
