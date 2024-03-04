import Button from '../common/Button';
import styles from './Modal.module.css';
import imageProfile from '../../assets/images/none-profile.svg';

const Modal = ({ onClose }) => {
  const relationship = { freind: '친구', acquaintance: '지인', colleague: '동료', family: '가족' };
  return (
    <>
      <div className={styles.modalMask} onClick={onClose}></div>
      <div className={styles.modalContainer} onClick={event => event.stopPropagation()}>
        <div className={styles.profile}>
          <div className={styles.profileInfo}>
            <div className={styles.profileLeft}>
              <img className={styles.profileImage} src={imageProfile} alt="보낸 사람의 프로필." />
              <div>
                <p className={styles.profileTitle}>From. OOO</p>
                <p className={`${styles.profileBadge} ${styles.friend}`}>{relationship.freind}</p>
              </div>
            </div>
            <p className={styles.date}>20XX.XX.XX</p>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.message}>내용</p>
        </div>

        <div className={styles.buttonOk} onClick={onClose}>
          <Button size="medium">확인</Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
