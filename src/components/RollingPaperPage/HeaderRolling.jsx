import styles from './HeaderRolling.module.css';

const HeaderRolling = () => {
  return (
    <div className={styles.headerContainer}>
      <div>To. Ashely</div>
      <div className={styles.contentContainer}>
        <div>profile img 23명이 작성했어요!</div>
        <div>emoji</div>
        <div>추가</div>
        <div>공유</div>
      </div>
    </div>
  );
};
export default HeaderRolling;
