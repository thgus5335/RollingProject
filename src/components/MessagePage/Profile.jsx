import styles from './Profile.module.css';
import customImg from '../../assets/images/custom.png';
import ProfileImg from './ProfileImg';
import { useEffect, useState } from 'react';
const Profile = ({ onProfileUrlChange, profileUrl }) => {
  const customImgUrl = process.env.PUBLIC_URL + customImg;
  const [isImageClicked, setIsImageClicked] = useState({ custom: true });

  const handleGetUrl = e => {
    const newImgUrl = e.target.src;

    if (profileUrl !== newImgUrl) {
      onProfileUrlChange(newImgUrl);
    }
    setIsImageClicked(isImageClicked);
  };

  useEffect(() => {
    onProfileUrlChange(customImgUrl);
  }, []);

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.title}>프로필 이미지</h1>
      <div className={styles.profileImage}>
        <img
          className={isImageClicked.custom ? styles.clicked : styles.notClicked}
          src={customImgUrl}
          onClick={handleGetUrl}
        />
        <div className={styles.imageSelect}>
          <div>프로필 이미지를 선택해주세요!</div>
          <ProfileImg onProfileUrlChange={onProfileUrlChange} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
