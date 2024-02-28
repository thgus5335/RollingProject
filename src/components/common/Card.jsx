import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles['card-area']}>
      <div className={styles['info-area']}>
        <h3>To.</h3>
        <p>명이 작성했어요!</p>
      </div>

      <div className={styles['imo-area']}></div>
    </div>
  );
};

export default Card;
