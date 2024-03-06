import { useEffect, useState } from 'react';

import FontPicker from './FontPicker';
import ShareMessageBtn from './ShareMessageBtn';
import InputMessage from './InputMessage';
import Profile from './Profile';
import NameInsert from './NameInsert';
import Relation from './Relation';
import { createMessageApi, getRecipient } from '../../apis/createMessageApi';
import styles from '../../pages/MessagePage.module.css';
import { useParams, useNavigate } from 'react-router-dom';

const MessageForm = () => {
  const FIRST_PROFILE_URL = 'https://i.imgur.com/u4nrpjo.png';
  const [nameValue, setNameValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [profileUrl, setProfileUrl] = useState(FIRST_PROFILE_URL);
  const [isButtonValid, setIsButtonValid] = useState(false);
  const [relation, setRelation] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const [recipientId] = useState(useParams().id);
  const navigate = useNavigate();

  const asyncRecipient = async () => {
    await getRecipient();
  };

  const submitInfo = {
    sender: nameValue,
    relationship: relation,
    content: messageValue,
    font: font,
    profileImageURL: profileUrl,
  };

  const handleDataSubmit = async e => {
    e.preventDefault();
    try {
      await createMessageApi(submitInfo, recipientId);
      navigate(`/post/${recipientId}`);
    } catch (e) {
      console.error('ERROR:', e);
    }
  };
  const handleNameChange = name => {
    setNameValue(name);
    console.log(name);
  };

  const handleMessageChange = text => {
    setMessageValue(text);
  };

  const handleCustomImgUrlGet = url => {
    setProfileUrl(url);
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
    <>
      <form className={styles.form} onSubmit={handleDataSubmit}>
        <NameInsert name={nameValue} onNameChange={handleNameChange} />
        <Profile profileUrl={profileUrl} onProfileUrlChange={handleCustomImgUrlGet} customImgUrl={FIRST_PROFILE_URL} />
        <Relation onRelationChange={handleRelationChange} relation={relation} />
        <InputMessage onMessageChange={handleMessageChange} />
        <FontPicker onFontChange={handleFontChange} font={font} />
        <ShareMessageBtn isValid={isButtonValid} />
      </form>
    </>
  );
};

export default MessageForm;
