import HotList from '../components/ListPage/HotList';
import Button from '../components/common/Button';
import RecentList from '../components/ListPage/RecentList';
import styles from './ListPage.module.css';
import { Link } from 'react-router-dom';

function ListPage() {
  return (
    <main className={styles.outfit}>
      <HotList />
      <RecentList />
      <div className={styles.buttonWidth}>
        <Link to="/post">
          <Button size="medium">나도 만들어보기</Button>
        </Link>
      </div>
    </main>
  );
}

export default ListPage;
