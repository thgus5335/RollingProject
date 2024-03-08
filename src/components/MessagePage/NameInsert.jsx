import { useState } from 'react';
import styles from './NameInsert.module.css';

const NameInsert = ({ name, onNameChange }) => {
  const [noValueInput, setNoValueInput] = useState(false);

  const handleChangeName = e => {
    const newName = e.target.value;
    onNameChange(newName);
  };

  const handleBlurFromInput = () => {
    setNoValueInput(name.trim().length === 0);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && name === '') {
      setNoValueInput(true);
    } else {
      setNoValueInput(false);
    }
  };

  return (
    <div className={styles.nameContainer}>
      <h1 className={styles.title}>From.</h1>
      <input
        value={name}
        className={!noValueInput ? styles.nameInput : styles.noValueNameInput}
        placeholder="이름을 입력해 주세요."
        onChange={handleChangeName}
        onBlur={handleBlurFromInput}
        onKeyDown={handleKeyDown}
      />
      {noValueInput === true ? <div className={styles.error}>값을 입력해 주세요.</div> : null}
    </div>
  );
};
export default NameInsert;
