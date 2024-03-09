import Button from '../common/Button';
import styles from './Modal.module.css';
import ManageMessage from '../../utils/ManageMessage';

const Modal = ({ onClose, messageInfo }) => {
  const { profileImageURL, sender, relationship, content, fontStyle, badge, date } = ManageMessage(messageInfo);
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
          <p className={`${styles.message} ${styles[fontStyle]}`} dangerouslySetInnerHTML={{ __html: content }} />
          <div className={styles.buttonOk} onClick={onClose}>
            <Button size="medium">확인</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
