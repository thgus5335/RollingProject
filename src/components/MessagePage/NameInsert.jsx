import { useState } from 'react';
import styles from './NameInsert.module.css';

const NameInsert = ({ name, onNameChange }) => {
  const [blur, setBlur] = useState(false);
  const handleChangeName = e => {
    const newName = e.target.value;
    onNameChange(newName);
  };

  const handleBlurFromInput = () => {
    setBlur(name.trim().length === 0);
  };

  return (
    <div className={styles.nameContainer}>
      <h1 className={styles.title}>From.</h1>
      <input
        value={name}
        className={styles.nameInput}
        placeholder="이름을 입력해 주세요."
        onChange={handleChangeName}
        onBlur={handleBlurFromInput}
      />
      {blur === true ? <div className={styles.error}>값을 입력해 주세요.</div> : null}
    </div>
  );
};
export default NameInsert;
