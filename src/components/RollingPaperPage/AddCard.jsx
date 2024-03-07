import styles from './AddCard.module.css';
import iconPlus from '../../assets/icons/plus.svg';

const AddCard = ({ mode = { mode } }) => {
  return (
    <div className={`${styles.card}`}>
      <div className={styles.add}>
        <img className={styles.iconAdd} src={iconPlus} alt="롤링페이퍼 생성하기 아이콘." />
      </div>
    </div>
  );
};

export default AddCard;
