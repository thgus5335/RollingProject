import styles from './Card.module.css';
// import noneProfile from '../../assets/images/none-profile.svg';
import Button from '../common/Button';
import iconDelete from '../../assets/icons/delete.svg';
import Modal from './Modal';
import ModalPortal from './Portal';
import { useState } from 'react';

const Card = ({ mode = 'normal', messageInfo }) => {
  const { profileImageURL, sender, relationship, content } = messageInfo;
  const [openModal, setOpenModal] = useState(false);

  const badge = { 친구: 'friend', 지인: 'acquaintance', 동료: 'colleague', 가족: 'family' };
  const date = messageInfo.createdAt.substr(0, 10).replaceAll('-', '.');

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <ModalPortal>
          <Modal onClose={handleCloseModal} messageInfo={messageInfo} date={date} />
        </ModalPortal>
      )}
      <div className={`${styles.card}`} onClick={() => handleOpenModal()}>
        <div className={styles.profile}>
          <div className={styles.profileInfo}>
            <img className={styles.profileImage} src={profileImageURL} alt="보낸 사람의 프로필." />
            <div>
              <p className={styles.profileTitle}>From. {sender}</p>
              <p className={`${styles.profileBadge} ${styles[badge[relationship]]}`}>{relationship}</p>
            </div>
          </div>
          {mode === 'edit' && (
            <div className={styles.deleteCard}>
              <Button size="medium" type="outline">
                <img src={iconDelete} alt="롤링 페이퍼 카드 삭제하기." />
              </Button>
            </div>
          )}
        </div>

        <div className={styles.content}>
          <p className={styles.message}>{content}</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
