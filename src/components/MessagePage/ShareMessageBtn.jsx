import styles from './ShareMessageBtn.module.css';
const ShareMessageBtn = ({ isValid }) => {
  return (
    <div className={styles.container}>
      <button className={isValid ? styles.validButton : styles.invalidButton} disabled={!isValid}>
        생성하기
      </button>
    </div>
  );
};

export default ShareMessageBtn;
