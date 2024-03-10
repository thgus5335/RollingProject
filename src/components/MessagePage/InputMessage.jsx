import styles from './InputMessage.module.css';
import QuillEditor from './QuillEditor';

const InputMessage = ({ onMessageChange }) => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>내용을 입력해 주세요.</h1>
        <QuillEditor onMessageChange={onMessageChange} />
      </div>
    </>
  );
};

export default InputMessage;
