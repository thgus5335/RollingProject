import { useState } from 'react';
import styles from './InputMessage.module.css';
import ReactQuill from 'react-quill';
const InputMessage = () => {
  const [content, setContent] = useState('');
  const pureText = content.replace(/(<([^>]+)>)/gi, '');
  console.log(pureText);
  const handleChangeContent = text => {
    setContent(text);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>내용을 입력해 주세요.</h1>
      <ReactQuill onChange={handleChangeContent} style={{ width: '45rem', height: '19.25rem' }} />
    </div>
  );
};

export default InputMessage;
