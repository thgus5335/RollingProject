import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css'; // CSS 파일 import

import Logo from './Logo';

export default function Header() {
  const location = useLocation();
  const isButtonPage = location.pathname === '/' || location.pathname === '/list';

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerNavigation}>
        <Link to="/">
          <Logo />
        </Link>
        {isButtonPage && (
          <Link to="/post">
            <button className={styles.headerButton}>롤링 페이퍼 만들기</button>
          </Link>
        )}
      </div>
    </div>
  );
}
