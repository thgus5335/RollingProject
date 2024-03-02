import HotList from './HotList';
import Button from '../common/Button';
import RecentList from './RecentList';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.outfit}>
      <HotList />
      <RecentList />
      <div className={styles.buttonWidth}>
        <Button size="medium">나도 만들어보기</Button>
      </div>
    </main>
  );
};

export default Main;
