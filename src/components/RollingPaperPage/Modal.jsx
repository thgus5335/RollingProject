import Button from '../common/Button';
import styles from './Modal.module.css';

const Modal = ({ onClose, messageInfo, date }) => {
  const badge = { 친구: 'freind', 지인: 'acquaintance', 동료: 'colleague', 가족: 'family' };
  const { profileImageURL, sender, relationship, content } = messageInfo;
  return (
    <>
      <div className={styles.modalMask} onClick={onClose}></div>
      <div className={styles.modalContainer} onClick={event => event.stopPropagation()}>
        <div className={styles.profile}>
          <div className={styles.profileInfo}>
            <div className={styles.profileLeft}>
              <img className={styles.profileImage} src={profileImageURL} alt="보낸 사람의 프로필." />
              <div>
                <p className={styles.profileTitle}>From. {sender}</p>
                <p className={`${styles.profileBadge} ${styles[badge[relationship]]}`}>{relationship}</p>
              </div>
            </div>
            <p className={styles.date}>{date}</p>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.message}>{content}</p>
        </div>

        <div className={styles.buttonOk} onClick={onClose}>
          <Button size="medium">확인</Button>
        </div>
      </div>
    </>
  );
};

export default Modal;
