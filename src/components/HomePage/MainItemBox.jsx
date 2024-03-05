import styles from './MainItemBox.module.css'; // CSS 파일 import

export default function MainItemBox({
  profileImage,
  recipientId,
  relationship,
  content,
  createdAt
}) {
  return (
    <div className={styles.itemBox}>
      <div className={styles.firstBox}>
        <div className={styles.infoBox}>
          <img src={profileImage} alt="프로필 사진" className={styles.profileImage} />

          <div className={styles.whoBox}>
            <div className={styles.name}>From. {recipientId}</div>
            <div className={styles.rel}>{relationship}</div>
          </div>
        </div>
      </div>
      <div className={styles.line} />

      <div className={styles.secondBox}>
        <div className={styles.content}>{content}</div>
        <div className={styles.date}>{createdAt}</div>
      </div>
    </div>
  );
}
