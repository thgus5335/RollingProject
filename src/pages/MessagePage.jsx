import NameInsert from '../components/MessagePage/NameInsert';
import Profile from '../components/MessagePage/Profile';
import RelationShip from '../components/MessagePage/RelationShip';
import styles from './MessagePage.module.css';

const MessagePage = () => {
  return (
    <div className={styles.messagePage}>
      <div className={styles.pageContainer}>
        <NameInsert />
        <Profile />
        <RelationShip />
      </div>
    </div>
  );
};
export default MessagePage;
