import styles from './RollingPaperPage.module.css';
import CardList from '../components/RollingPaperPage/CardList';
import Button from '../components/common/Button';
import Modal from '../components/RollingPaperPage/Modal';
import ModalPortal from '../utils/Portal';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRollingPaper } from '../apis/rollingPaperAPI';
import HeaderRolling from '../components/RollingPaperPage/HeaderRolling';
import Header from '../components/common/Header';
import iconArrowLeft from '../assets/icons/arrow-left.svg';
import useModal from '../hooks/useModal';

const RollingPage = () => {
  const id = useParams();
  const [rollingInfo, setRollingInfo] = useState([]);
  const [mode, setMode] = useState('normal');
  const { openModal, handleOpenModal, handleCloseModal } = useModal();

  const { backgroundColor, backgroundImageURL } = rollingInfo;
  const background = backgroundImageURL ? 'imageBackground' : backgroundColor;
  const backwardColor = backgroundImageURL ? 'white' : '';

  const fetchData = async id => {
    const response = await getRollingPaper(id);
    setRollingInfo(response);
  };

  useEffect(() => {
    fetchData(id.id);
  }, []);

  return (
    <>
      <Header />
      <HeaderRolling rollingInfo={rollingInfo} />
      <main>
        {openModal && (
          <ModalPortal>
            <Modal onClose={handleCloseModal} id={id} />
          </ModalPortal>
        )}
        <div
          className={`${styles.rollingBackground} ${styles[background]}`}
          style={{ backgroundImage: `url(${backgroundImageURL})` }}></div>
        <div className={styles.rollingContainer}>
          <div className={styles.buttonContainer}>
            <Link to="/list/">
              <div className={`${styles.backward} ${styles[backwardColor]}`}>
                <img className={styles.backwardIcon} src={iconArrowLeft} />
                <p className={styles.backwardConetent}>뒤로 가기</p>
              </div>
            </Link>
            {mode === 'normal' ? (
              <div className={styles.buttonNormal}>
                <Button size={'medium'} type="outline" onClick={() => setMode('edit')}>
                  편집하기
                </Button>
              </div>
            ) : (
              <div className={styles.buttonEdit}>
                <Button size={'medium'} type="outline" onClick={() => setMode('normal')}>
                  편집 취소
                </Button>
                <Button size={'medium'} type="primary" onClick={() => handleOpenModal()}>
                  삭제하기
                </Button>
              </div>
            )}
          </div>
          <CardList id={id.id} mode={mode} />
        </div>
      </main>
    </>
  );
};

export default RollingPage;
