import styles from './Picker.module.css';
import checkIcon from '../../assets/icons/check.svg';

const ImageBox = ({ onClick, key, src, alt, selectedImageURL }) => {
  return (
    <div key={key} className={styles.pickerBox}>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        className={`${selectedImageURL === src && styles.imagesOpacity} ${styles.pickerImage} ${styles.imgOverlay}`}
      />
      <img src={checkIcon} alt="check" className={`${styles.checkOverlay} ${styles.check}`} />
      {selectedImageURL === src && <img src={checkIcon} alt="check" className={styles.check} />}
    </div>
  );
};

export default ImageBox;
