// import { useState } from 'react';

import styles from './ProfileImg.module.css';

const ProfileImg = ({ profileUrl, handleGetUrl, imagesUrl }) => {
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
    </div>
  );
};

export default ProfileImg;
