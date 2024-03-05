import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import styles from './Layout.module.css'; // CSS 파일 import

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.page}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
