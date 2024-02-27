import { useState } from 'react';
import styles from './ToInput.module.css';

const ToInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = e => {
    setInputValue(e.target.value);
    setError(false);
  };

  const handleInputBlur = () => {
    if (inputValue.trim() === '') {
      setError(true);
    }
  };

  const placeholder = error ? '값을 입력해 주세요.' : '받는 사람 이름을 입력해 주세요.';
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
    </div>
  );
};

export default ToInput;
