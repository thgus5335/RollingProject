import { useState } from 'react';
import styles from './NameInsert.module.css';
const Name = () => {
  const [name, setName] = useState('');
  const [blur, setBlur] = useState(false);
  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleBlurFromInput = () => {
    if (name.trim().length === 0) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  };

  return (
    <div className={styles.nameContainer}>
      <h1>From.</h1>
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
export default Name;
