import { useState } from 'react';
import styles from './ToInput.module.css';

const ToInput = ({ onNameChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = e => {
    setInputValue(e.target.value);
    setError(false);
    onNameChange(e.target.value);
  };

  const handleInputBlur = () => {
    if (inputValue.trim() === '') {
      setError(true);
    }
  };

  const placeholder = '받는 사람 이름을 입력해 주세요.';

  return (
    <div>
      <h1>To.</h1>
      <form>
        <label htmlFor="to-input"></label>
        <input
          type="text"
          id="to-input"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className={` ${error && styles.errorInput}`}
        />
      </form>
      {error && <p className={` ${error && styles.errorText}`}>값을 입력해 주세요.</p>}
    </div>
  );
};

export default ToInput;
