import styles from './Profile.module.css';

const Profile = ({ recentMessages, messageCount }) => {
  const profileCount = messageCount > 3 ? 4 : messageCount;
  const profileCountObj = {
    1: 1,
    2: 0.3,
    3: -1,
    4: -1.5,
  };
  const overProfileCount = messageCount >= 102 ? 102 : messageCount;
  const writerCount = messageCount > 3 && messageCount < 100 ? messageCount : '99+';

  return (
    <>
      <div style={{ marginRight: `${profileCountObj[profileCount]}rem` }}>
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
            {messageCount > 3 && <div className={styles.plusProfile}>+{overProfileCount - 3}</div>}
          </div>
        )}
      </div>

      <p className={styles.countDescription}>
        <span className={styles.strongSpan}>{writerCount}</span>명이 작성했어요!
      </p>
    </>
  );
};

export default Profile;
