import styles from './Button.module.css';
/**
 * Button 컴포넌트
 * @param {{size: string, type: string}} size height: large(3.5rem), medium(2.5rem), small(2rem), extraSmall(1.75rem)
 */
const Button = ({ size, type = 'primary', isDisabled = false, children }) => {
  return (
    <button className={`${styles.button} ${styles[size]} ${styles[type]}`} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
