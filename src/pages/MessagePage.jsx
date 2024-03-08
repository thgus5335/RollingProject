import styles from './MessagePage.module.css';
import Header from '../components/common/Header';
import MessageForm from '../components/MessagePage/MessageForm';

const MessagePage = () => {
  return (
    <>
      <Header />
      <div className={styles.messagePage}>
        <div className={styles.pageContainer}>
          <MessageForm />
        </div>
      </div>
    </>
  );
};
export default MessagePage;
