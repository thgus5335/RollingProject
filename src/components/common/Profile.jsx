import styles from './Profile.module.css';

const Profile = ({ recentMessages, messageCount }) => {
  const profileCount = messageCount > 3 ? 5 : messageCount;
  return (
    <>
      <div style={{ marginRight: `${profileCount * -0.5}rem` }}>
        {recentMessages && (
          <div className={styles.imageStyle}>
            {recentMessages.map((recentMessage, index) => (
              <img
                key={recentMessage.id}
                src={recentMessage.profileImageURL}
                className={styles.profileImage}
                style={{ left: `${index * -1}rem` }}
              />
            ))}
            {messageCount > 3 && <div className={styles.plusProfile}>+{messageCount - 3}</div>}
          </div>
        )}
      </div>

      <p className={styles.countDescription}>
        <span className={styles.strongSpan}>{messageCount}</span>명이 작성했어요!
      </p>
    </>
  );
};

export default Profile;
