import styles from './Modal.module.css';
import ModalAlert from './ModalAlert';
import ModalCard from './ModalCard';

const Modal = ({ onClose, messageInfo, id, isCard = false }) => {
  return (
    <>
      <div className={styles.modalMask} onClick={onClose}></div>
      <div className={styles.modalContainer} onClick={event => event.stopPropagation()}>
        {isCard ? <ModalCard onClose={onClose} messageInfo={messageInfo} /> : <ModalAlert onClose={onClose} id={id} />}
      </div>
    </>
  );
};

export default Modal;
