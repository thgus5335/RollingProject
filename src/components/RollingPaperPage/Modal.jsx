import styles from './Modal.module.css';
import ModalCard from './ModalCard';

const Modal = ({ onClose, messageInfo }) => {
  return (
    <>
      <div className={styles.modalMask} onClick={onClose}></div>
      <div className={styles.modalContainer} onClick={event => event.stopPropagation()}>
        <ModalCard onClose={onClose} messageInfo={messageInfo} />
      </div>
    </>
  );
};

export default Modal;
