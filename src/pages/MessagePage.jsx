import { useState, useEffect } from 'react';
import FontPicker from '../components/MessagePage/FontPicker';
import InputMessage from '../components/MessagePage/InputMessage';
import NameInsert from '../components/MessagePage/NameInsert';
import Profile from '../components/MessagePage/Profile';
import RelationShip from '../components/MessagePage/RelationShip';
import ShareMessageBtn from '../components/MessagePage/ShareMessageBtn';
import styles from './MessagePage.module.css';

const MessagePage = () => {
  const [nameValue, setNameValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [isButtonValid, setIsButtonValid] = useState(false);

  const handleNameChange = newName => {
    setNameValue(newName);
  };

  const handleMessageChange = text => {
    setMessageValue(text);
  };

  useEffect(() => {
    if (nameValue && messageValue) {
      setIsButtonValid(true);
    } else {
      setIsButtonValid(false);
    }
  }, [nameValue, messageValue]);
  return (
    <div className={styles.messagePage}>
      <div className={styles.pageContainer}>
        <form onSubmit={e => e.preventDefault()}>
          <NameInsert name={nameValue} onNameChange={handleNameChange} />
          <Profile />
          <RelationShip />
          <InputMessage onMessageChange={handleMessageChange} />
          <FontPicker />
          <ShareMessageBtn isValid={isButtonValid} />
        </form>
      </div>
    </div>
  );
};
export default MessagePage;
