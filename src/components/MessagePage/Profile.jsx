import styles from './Profile.module.css';
// import customImg from '../../assets/images/custom.png';
import ProfileImg from './ProfileImg';
// import profileImg1 from '../../assets/images/profile-img1.png';
// import profileImg2 from '../../assets/images/profile-img2.png';
// import profileImg3 from '../../assets/images/profile-img3.png';
import { useEffect, useState } from 'react';
const Profile = ({ onProfileUrlChange, profileUrl }) => {
  const customImgUrl = process.env.PUBLIC_URL + '/custom.png';
  const profileImages = [
    process.env.PUBLIC_URL + '/profile-img1.png',
    process.env.PUBLIC_URL + '/profile-img2.png',
    process.env.PUBLIC_URL + '/profile-img3.png',
  ];
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
        <img className={styles.customImg} src="/custom.png" onClick={handleGetUrl} />
        <div className={styles.imageSelect}>
          <div>프로필 이미지를 선택해주세요!</div>
          <ProfileImg
            onProfileUrlChange={onProfileUrlChange}
            profileUrl={profileUrl}
            handleGetUrl={handleGetUrl}
            imagesUrl={profileImages}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
