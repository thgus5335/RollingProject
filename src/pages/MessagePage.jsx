import { useState } from 'react';
import FontPicker from '../components/MessagePage/FontPicker';
import InputMessage from '../components/MessagePage/InputMessage';
import NameInsert from '../components/MessagePage/NameInsert';
import Profile from '../components/MessagePage/Profile';
import RelationShip from '../components/MessagePage/RelationShip';
import ShareMessageBtn from '../components/MessagePage/ShareMessageBtn';
import styles from './MessagePage.module.css';

// const [values, setValues] = useState({});
const MessagePage = () => {
  const [nameValue, setNameValue] = useState('');
  console.log(nameValue);
  const handleNameChange = newName => {
    setNameValue(newName);
  };

  return (
    <div className={styles.messagePage}>
      <div className={styles.pageContainer}>
        <form onSubmit={e => e.preventDefault()}>
          <NameInsert name={nameValue} onNameChange={handleNameChange} />
          <Profile />
          <RelationShip />
          <InputMessage />
          <FontPicker />
          <ShareMessageBtn />
        </form>
      </div>
    </div>
  );
};
export default MessagePage;
