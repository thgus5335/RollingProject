import { useState, useEffect } from 'react';
import FontPicker from '../components/MessagePage/FontPicker';
import InputMessage from '../components/MessagePage/InputMessage';
import NameInsert from '../components/MessagePage/NameInsert';
import Profile from '../components/MessagePage/Profile';
import Relation from '../components/MessagePage/Relation';
import ShareMessageBtn from '../components/MessagePage/ShareMessageBtn';
import styles from './MessagePage.module.css';
import { useParams } from 'react-router-dom';
import { createMessageApi, getRecipient } from '../apis/createMessageApi';

const MessagePage = () => {
  const [nameValue, setNameValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [profileImgUrl, setProfileImgUrl] = useState('');
  const [isButtonValid, setIsButtonValid] = useState(false);
  const [relation, setRelation] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const [recipientId] = useState(useParams().id);

  const asyncRecipient = async () => {
    await getRecipient();
  };

  const submitInfo = {
    sender: nameValue,
    relationship: relation,
    content: messageValue,
    font: font,
    profileImageURL: profileImgUrl,
  };

  const handleDataSubmit = async e => {
    e.preventDefault();
    try {
      await createMessageApi(submitInfo, recipientId);
      window.location.href = `/post/${recipientId}`;
    } catch (e) {
      console.error('ERROR:', e);
    }
  };
  const handleNameChange = newName => {
    setNameValue(newName);
  };

  const handleMessageChange = text => {
    setMessageValue(text);
  };

  const handleCustomImgUrlGet = url => {
    setProfileImgUrl(url);
  };

  const handleRelationChange = relation => {
    setRelation(relation);
  };

  const handleFontChange = font => {
    setFont(font);
  };

  useEffect(() => {
    if (nameValue && messageValue) {
      setIsButtonValid(true);
    } else {
      setIsButtonValid(false);
    }
  }, [nameValue, messageValue]);

  useEffect(() => {
    asyncRecipient();
  }, []);
  return (
    <div className={styles.messagePage}>
      <div className={styles.pageContainer}>
        <form className={styles.form} onSubmit={handleDataSubmit}>
          <NameInsert name={nameValue} onNameChange={handleNameChange} />
          <Profile profileUrl={profileImgUrl} onProfileUrlChange={handleCustomImgUrlGet} />
          <Relation onRelationChange={handleRelationChange} relation={relation} />
          <InputMessage onMessageChange={handleMessageChange} />
          <FontPicker onFontChange={handleFontChange} font={font} />
          <ShareMessageBtn isValid={isButtonValid} />
        </form>
      </div>
    </div>
  );
};
export default MessagePage;
