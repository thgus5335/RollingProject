import HotList from './HotList';
import Button from '../common/Button';
import RecentList from './RecentList';
import styles from './Main.module.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className={styles.outfit}>
      <HotList />
      <RecentList />
      <div className={styles.buttonWidth}>
        <Link to="/post" style={{ textDecoration: 'none' }}>
          <Button size="medium">나도 만들어보기</Button>
        </Link>
      </div>
    </main>
  );
};

export default Main;
