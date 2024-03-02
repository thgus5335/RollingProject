import logo from '../../assets/icons/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerArea}>
        <button className={styles.logoButton}>
          <img src={logo} alt="로고" />
        </button>
        <button className={`${styles.makeRollingButton} ${styles.logoButton}`}>롤링 페이퍼 만들기</button>
      </div>
    </header>
  );
};

export default Header;
