import styles from './Button.module.css';
/**
 * Button 컴포넌트
 * @param {{size: string, type: string}} size height: large(56px), medium(40px), small(32px), extraSmall(28px)
 */
const Button = ({ size, type = 'primary', isDisabled = false, children, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[size]} ${styles[type]}`} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
