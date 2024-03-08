import styles from './ToInput.module.css';
import useName from '../../hooks/useName';

const ToInput = () => {
  const { error, inputValue, handleInputChange, handleInputBlur } = useName();
  const placeholder = '받는 사람 이름을 입력해 주세요.';

  return (
    <div>
      <h1 className={styles.headerText}>To.</h1>
      <form>
        <label htmlFor="to-input"></label>
        <input
          type="text"
          id="to-input"
          maxLength="15"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className={` ${error && styles.errorInput} ${styles.input}`}
        />
      </form>
      {error && <p className={` ${error && styles.errorText}`}>값을 입력해 주세요.</p>}
    </div>
  );
};

export default ToInput;
