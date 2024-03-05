import styles from './MainTextBox.module.css'; 

export default function MainTextBox({ number, text, subText }) {
  return (
    <div className={styles.textContainer}>
      <div className={styles.pointBox}>Point.{number}</div>
      <div className={styles.textBox}>
        <div className={styles.text}>{text}</div>
        <div className={styles.subText}>{subText}</div>
      </div>
    </div>
  );
}
