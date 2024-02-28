import HotList from './HotList';
import MainButton from './MainButton';
import RecentList from './RecentList';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.outfit}>
      <HotList />
      <RecentList />
      <MainButton />
    </main>
  );
};

export default Main;
