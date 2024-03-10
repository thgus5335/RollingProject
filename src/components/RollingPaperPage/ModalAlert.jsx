import Button from '../common/Button';
import styles from './ModalAlert.module.css';
import { useNavigate } from 'react-router-dom';
import { deleteRollingPaper } from '../../apis/rollingPaperAPI';

const ModalAlert = ({ onClose, id }) => {
  const navigate = useNavigate();

  const handleDelete = async id => {
    const error = await deleteRollingPaper(id);
    if (error) {
      alert('롤링페이퍼 삭제가 실패했습니다.');
      return;
    }
    alert('롤링페이퍼를 삭제했습니다.');
    navigate('/list/');
  };

  return (
    <div className={styles.modalAlert}>
      <h2>정말 이 롤링페이퍼를 삭제할까요?😥</h2>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonOk} onClick={onClose}>
          <Button size="medium" type="outline" onClick={onClose}>
            취소
          </Button>
        </div>
        <div className={styles.buttonOk} onClick={onClose}>
          <Button size="medium" onClick={() => handleDelete(id.id)}>
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;
