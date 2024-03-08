import styles from './RollingPaperPage.module.css';
import CardList from '../components/RollingPaperPage/CardList';
import Button from '../components/common/Button';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteRollingPaper, getRollingPaper } from '../apis/rollingPaperAPI';
import HeaderRolling from '../components/RollingPaperPage/HeaderRolling';
import Header from '../components/common/Header';

const RollingPage = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [rollingInfo, setRollingInfo] = useState([]);
  const [mode, setMode] = useState('normal');

  const { backgroundColor, backgroundImageURL } = rollingInfo;
  const background = backgroundImageURL ? 'imageBackground' : backgroundColor;

  const fetchData = async id => {
    const response = await getRollingPaper(id);
    setRollingInfo(response);
  };

  const handleDelete = async id => {
    const error = await deleteRollingPaper(id);
    if (error) {
      alert('롤링페이퍼 삭제가 실패했습니다.');
      return;
    }
    alert('롤링페이퍼를 삭제했습니다.');
    navigate('/list/');
  };

  useEffect(() => {
    fetchData(id.id);
  }, []);

  return (
    <>
      <Header />
      <HeaderRolling rollingInfo={rollingInfo} />
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
                <Button
                  size={'medium'}
                  type="primary"
                  onClick={() => {
                    setMode('normal');
                    handleDelete(id.id);
                  }}>
                  삭제하기
                </Button>
              )}
            </div>
          </div>
          <CardList id={id.id} mode={mode} />
        </div>
      </main>
    </>
  );
};

export default RollingPage;
