import styles from './Profile.module.css';
import ProfileImg from './ProfileImg';

import { useState } from 'react';
const Profile = ({ onProfileUrlChange, profileUrl }) => {
  // const customImgUrl = 'https://i.imgur.com/u4nrpjo.png';
  // console.log(customImgUrl);
  const profileImages = [
    'https://i.imgur.com/v9GSBUB.png',
    'https://i.imgur.com/rr1x5VQ.png',
    'https://i.imgur.com/wpGcjHh.png',
    'https://i.imgur.com/IereXDn.png',
    'https://i.imgur.com/fU2kI3U.png',
    'https://i.imgur.com/TOZC5zi.png',
    'https://i.imgur.com/aOjTFl6.png',
    'https://i.imgur.com/ROUsh9Z.png',
    'https://i.imgur.com/aIdZMSf.png',
    'https://i.imgur.com/ztVqUdO.png',
  ];
  console.log(profileImages);
  const [isImageClicked, setIsImageClicked] = useState('https://i.imgur.com/v9GSBUB.png');

  const handleGetUrl = e => {
    const newImgUrl = e.target.src;

    if (profileUrl !== newImgUrl) {
      onProfileUrlChange(newImgUrl);
    }
    setIsImageClicked(isImageClicked);
  };

  // useEffect(() => {
  //   onProfileUrlChange(customImgUrl);
  // }, []);

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.title}>프로필 이미지</h1>
      <div className={styles.profileImage}>
        <img className={styles.customImg} src={profileUrl} />
        <div className={styles.imageSelect}>
          <div>프로필 이미지를 선택해주세요!</div>
          <ProfileImg
            profileUrl={profileUrl}
            handleGetUrl={handleGetUrl}
            imagesUrl={profileImages}
            setIsImageClicked={setIsImageClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
