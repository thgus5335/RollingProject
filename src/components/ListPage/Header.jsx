import logo from '../../assets/icons/logo.svg';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerArea}>
        <Link to="/">
          <button className={styles.logoButton}>
            <img src={logo} alt="로고" />
          </button>
        </Link>
        <Link to="/post">
          <button className={`${styles.makeRollingButton} ${styles.logoButton}`}>롤링 페이퍼 만들기</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
