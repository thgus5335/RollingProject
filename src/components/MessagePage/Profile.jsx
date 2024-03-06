import styles from './Profile.module.css';
import ProfileImg from './ProfileImg';

import MainProfile from './MainProfile';
// import { useState } from 'react';

const Profile = ({ onProfileUrlChange, profileUrl, customImgUrl }) => {
  const PROFILE_IMAGES = [
    'https://i.imgur.com/v9GSBUB.png',
    'https://i.imgur.com/rr1x5VQ.png',
    'https://i.imgur.com/wpGcjHh.png',
    'https://i.imgur.com/IereXDn.png',
    'https://i.imgur.com/TOZC5zi.png',
    'https://i.imgur.com/aIdZMSf.png',
    'https://i.imgur.com/ztVqUdO.png',
  ];

  const handleGetUrl = e => {
    const newImgUrl = e.target.src;

    if (profileUrl !== newImgUrl) {
      onProfileUrlChange(newImgUrl);
    }
  };

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.title}>프로필 이미지</h1>
      <div className={styles.profileImage}>
        <MainProfile customImgUrl={customImgUrl} onProfileUrlChange={onProfileUrlChange} profileUrl={profileUrl} />

        <div className={styles.imageSelect}>
          <div>프로필 이미지를 선택해주세요!</div>
          <ProfileImg
            profileUrl={profileUrl}
            handleGetUrl={handleGetUrl}
            imagesUrl={PROFILE_IMAGES}
            // isClickedImage={isClickedImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
