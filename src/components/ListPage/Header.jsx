import logo from '../../assets/icons/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles['header-area']}>
        <button>
          <img src={logo} alt="로고" />
        </button>
        <button className={styles['make-rolling-button']}>롤링 페이퍼 만들기</button>
      </div>
    </header>
  );
};

export default Header;
