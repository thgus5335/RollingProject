import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import Button from './Button';
import logo from '../../assets/icons/logo.svg';

export default function Header() {
  const location = useLocation();
  const isButtonPage = location.pathname === '/' || location.pathname === '/list';

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerNavigation}>
        <Link to="/">
          <div className={styles.logoStyle}>
            <img src={logo} alt="logo" />
            <h2 className={styles.logoTitle}>Rolling</h2>
          </div>
        </Link>
        {isButtonPage && (
          <Link to="/post">
            <Button size="medium" type="outline">
              롤링 페이퍼 만들기
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
