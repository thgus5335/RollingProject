import styles from './InputMessage.module.css';
import ReactQuill from 'react-quill';
const InputMessage = ({ onMessageChange }) => {
  const handleChangeContent = text => {
    // const pureText = text.replace(/(<([^>]+)>)/gi, '');
    console.log(text);
    onMessageChange(text);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>내용을 입력해 주세요.</h1>
      <ReactQuill onChange={handleChangeContent} style={{ height: '19.25rem' }} />
    </div>
  );
};

export default InputMessage;
