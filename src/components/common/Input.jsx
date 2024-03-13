import styles from './Input.module.css';

const Input = ({ name, onChange, onBlur, onKeyDown, who, error }) => {
  const placeholder = '이름을 입력해 주세요.';
  return (
    <div>
      <h1 className={styles.headerText}>{who}.</h1>
      <form>
        <label htmlFor="input"></label>
        <input
          type="text"
          id="input"
          maxLength="15"
          placeholder={placeholder}
          value={name}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          className={` ${error && styles.errorInput} ${styles.input}`}
        />
      </form>
      {error && <p className={` ${error && styles.errorText}`}>값을 입력해 주세요.</p>}
    </div>
  );
};

export default Input;
