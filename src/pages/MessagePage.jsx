import styles from './MessagePage.module.css';
import MessageForm from '../components/MessagePage/MessageForm';

const MessagePage = () => {
  return (
    <div className={styles.messagePage}>
      <div className={styles.pageContainer}>
        <MessageForm />
      </div>
    </div>
  );
};
export default MessagePage;
