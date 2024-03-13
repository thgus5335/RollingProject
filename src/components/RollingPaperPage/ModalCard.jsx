import Button from '../common/Button';
import styles from './ModalCard.module.css';
import ManageMessage from '../../utils/ManageMessage';

const ModalCard = ({ onClose, messageInfo }) => {
  const { profileImageURL, sender, relationship, content, fontStyle, badge, date } = ManageMessage(messageInfo);
  return (
    <div className={styles.modalCard}>
      <div className={styles.profile}>
        <div className={styles.profileInfo}>
          <div className={styles.profileLeft}>
            <img className={styles.profileImage} src={profileImageURL} alt="보낸 사람의 프로필." />
            <div>
              <p className={styles.profileTitle}>From. {sender}</p>
              <p className={`${styles.profileBadge} ${styles[badge]}`}>{relationship}</p>
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
  );
};

export default ModalCard;
