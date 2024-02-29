import { useState } from 'react';
import profileImg1 from '../../assets/images/profile-img1.png';
import profileImg2 from '../../assets/images/profile-img2.png';
import profileImg3 from '../../assets/images/profile-img3.png';
import styles from './ProfileImg.module.css';

const ProfileImg = ({ onProfileUrlChange }) => {
  const [currentImgUrl, setCurrentImgUrl] = useState('');
  const images = [
    process.env.PUBLIC_URL + profileImg1,
    process.env.PUBLIC_URL + profileImg2,
    process.env.PUBLIC_URL + profileImg3,
  ];
  const handleGetUrl = e => {
    const newImgUrl = e.target.src;
    setCurrentImgUrl(newImgUrl);

    if (newImgUrl !== currentImgUrl) {
      onProfileUrlChange(newImgUrl);
    }
  };

  return (
    <div className={styles.profileImgList}>
      {images.map((image, index) => (
        <img className={styles.image} onClick={handleGetUrl} key={index} src={image} />
      ))}
    </div>
  );
};

export default ProfileImg;
