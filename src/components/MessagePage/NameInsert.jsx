import { useState } from 'react';
import styles from './NameInsert.module.css';
const Name = () => {
  const [name, setName] = useState('');

  const handleChangeName = () => {
    setName(name);
  };
  return (
    <div className={styles.nameContainer}>
      <h1>From.</h1>
      <input
        value={name}
        className={styles.nameInput}
        placeholder="이름을 입력해 주세요."
        onChange={handleChangeName}></input>
    </div>
  );
};
export default Name;
