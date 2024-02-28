import styles from './NameInsert.module.css';
const Name = () => {
  return (
    <div className={styles.nameContainer}>
      <h1>From.</h1>
      <input className={styles.nameInput} placeholder="이름을 입력해 주세요."></input>
    </div>
  );
};
export default Name;
