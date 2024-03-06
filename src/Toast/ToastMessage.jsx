import closeIcon from '../assets/icons/close-icon.svg';
import completeBlue from '../assets/icons/complete-icon-blue.svg';
import completeGreen from '../assets/icons/complete-icon-green.svg';
import completeRed from '../assets/icons/complete-icon-red.svg';
import completeYellow from '../assets/icons/complete-icon-yellow.svg';
import styles from './Toast.module.css'; // CSS 파일 import

const ICONS = {
  error: completeRed,
  info: completeBlue,
  success: completeGreen,
  warning: completeYellow
};

export default function ToastMessage({ closeMessage, messages }) {
  return (
    <div className={styles.positionWrapper}>
      <div className={styles.verticalLiner}>
        {Array.isArray(messages) &&
          messages.length > 0 &&
          messages.map(({ messageType, id, message }) => (
            <div className={`${styles.box} ${styles[messageType]}`} key={id}>
              <div className={styles.horizontalLiner}>
                <img src={ICONS[messageType]} alt="icon" />
                <p className={styles.message}>{message}</p>
                <button
                  className={styles.closeButton}
                  onClick={() => closeMessage(id)}
                  type="button"
                >
                  <img src={closeIcon} alt="close-icon" />
                </button>
              </div>
              <div className={`${styles.progressbar} ${styles[messageType]}`} data-duration="5" />
            </div>
          ))}
      </div>
    </div>
  );
}
