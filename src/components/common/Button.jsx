import styles from './Button.module.css';
/**
 * Button 컴포넌트
 * @param {{size: string, width: float}} size : large(3.5rem), medium(2.5rem), small(2rem), extraSmall(1.75rem)
 */
const Button = ({ size, width, isDisabled = false, children }) => {
  const buttonWidth = { width: `${width}em` };
  return (
    <button className={`${styles.button} ${styles[size]}`} style={buttonWidth} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
