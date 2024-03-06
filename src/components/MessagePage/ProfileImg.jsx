import { useState } from 'react';
import styles from './ProfileImg.module.css';

const ProfileImg = ({ profileUrl, handleGetUrl, imagesUrl }) => {
  const [isClickedImage, setIsClickedImage] = useState(false);

  const handleClickImages = e => {
    handleGetUrl(e);
    setIsClickedImage(!isClickedImage);
  };
  return (
    <div className={styles.profileImgList}>
      {imagesUrl.map((imageUrl, index) => (
        <img
          className={`${styles.image} ${profileUrl === imageUrl && isClickedImage ? styles.selected : ''}`}
          onClick={handleClickImages}
          key={index}
          src={imageUrl}
        />
      ))}
    </div>
  );
};

export default ProfileImg;
