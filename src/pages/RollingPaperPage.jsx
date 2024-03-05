import styles from './RollingPaperPage.module.css';
import CardList from '../components/RollingPaperPage/CardList';
import Button from '../components/common/Button';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRollingPaper } from '../apis/rollingPaperAPI';

const RollingPage = () => {
  const id = useParams();
  const [rollingInfo, setRollingInfo] = useState([]);
  const [mode, setMode] = useState('normal');

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
            {mode === 'normal' ? (
              <Button size={'medium'} type="outline" onClick={() => setMode('edit')}>
                편집하기
              </Button>
            ) : (
              <Button size={'medium'} type="primary" onClick={() => setMode('normal')}>
                삭제하기
              </Button>
            )}
          </div>
        </div>
        <CardList id={id.id} mode={mode} />
      </div>
    </main>
  );
};

export default RollingPage;
