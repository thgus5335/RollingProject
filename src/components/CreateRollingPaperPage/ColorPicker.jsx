import styles from '../../pages/CreateRollingPaperPage.module.css';
import checkIcon from '../../assets/icons/check.svg';
import useColorPick from '../../hooks/useColorPick';

const ColorPicker = () => {
  const COLORS = ['beige', 'purple', 'blue', 'green'];
  const { selectedColor, handleClickColor } = useColorPick();
  return (
    <div className={styles.pickerContainer}>
      {COLORS.map((color, index) => (
        <div key={index} className={`${styles.pickerBox} ${styles[color]}`} onClick={() => handleClickColor(color)}>
          {selectedColor === color && <img src={checkIcon} alt="check" className={styles.check} />}
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;
