import styles from './InputMessage.module.css';
import ReactQuill from 'react-quill';
const InputMessage = () => {
  return (
    <div className={styles.container}>
      <h1>내용을 입력해 주세요.</h1>
      <ReactQuill style={{ width: '45rem', height: '19.25rem' }} />
    </div>
  );
};

export default InputMessage;
