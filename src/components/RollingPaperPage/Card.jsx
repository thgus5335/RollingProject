import styles from './Card.module.css';
import imageProfile from '../../assets/images/none-profile.svg';
import Button from '../common/Button';
import iconDelete from '../../assets/icons/delete.svg';

const Card = ({ mode = 'normal' }) => {
  const relationship = { freind: '친구', acquaintance: '지인', colleague: '동료', family: '가족' };
  return (
    <div className={`${styles.card}`}>
      <div className={styles.profile}>
        <div className={styles.profileInfo}>
          <img className={styles.profileImage} src={imageProfile} alt="보낸 사람의 프로필." />
          <div>
            <p className={styles.profileTitle}>From. OOO</p>
            <p className={`${styles.profileBadge} ${styles.friend}`}>{relationship.freind}</p>
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
        <p className={styles.message}>내용</p>
        <p className={styles.date}>20XX.XX.XX</p>
      </div>
    </div>
  );
};

export default Card;
