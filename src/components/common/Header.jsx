import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css'; // CSS 파일 import

import Logo from './Logo';
import Button from './Button';

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
            <Button size="medium" type="outline">
              롤링 페이퍼 만들기
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
