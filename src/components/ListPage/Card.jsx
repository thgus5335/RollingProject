import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.cardArea}>
      <div className={styles.infoArea}>
        <h3>To.</h3>
        <p>명이 작성했어요!</p>
      </div>

      <div className={styles.imoArea}></div>
    </div>
  );
}

export default Card;
