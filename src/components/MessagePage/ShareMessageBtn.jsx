import styles from './ShareMessageBtn.module.css';
import Button from '../common/Button';
const ShareMessageBtn = ({ isValid }) => {
  return (
    <div className={styles.container}>
      <Button size="medium" isDisabled={isValid ? false : true}>
        생성하기
      </Button>
    </div>
  );
};

export default ShareMessageBtn;
