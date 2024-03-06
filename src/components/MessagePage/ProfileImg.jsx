import styles from './ProfileImg.module.css';

const ProfileImg = ({ profileUrl, handleGetUrl, imagesUrl, imgURL }) => {
  return (
    <div className={styles.profileImgList}>
      {imagesUrl.map((imageUrl, index) => (
        <img
          className={`${styles.image} ${profileUrl === imageUrl ? styles.selected : ''}`}
          onClick={e => handleGetUrl(e, imageUrl)}
          key={index}
          src={imageUrl}
        />
      ))}
      {imgURL.length > 0 && (
        <img
          src={imgURL}
          alt="userImage"
          className={`${styles.image} ${profileUrl === imgURL ? styles.selected : ''}`}
          onClick={e => handleGetUrl(e, imgURL)}
        />
      )}
    </div>
  );
};

export default ProfileImg;
