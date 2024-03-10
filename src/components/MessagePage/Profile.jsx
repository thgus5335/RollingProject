import styles from './Profile.module.css';
import ProfileImg from './ProfileImg';
import MainProfile from './MainProfile';

const Profile = ({ onProfileUrlChange, profileUrl, customImgUrl }) => {
  const PROFILE_IMAGES = [
    'https://i.imgur.com/IFoifrl.png',
    'https://i.imgur.com/tUWbT1A.png',
    'https://i.imgur.com/VWh9alP.png',
    'https://i.imgur.com/ZFEDDMM.png',
    'https://i.imgur.com/kd0gpLi.png',
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
          <ProfileImg profileUrl={profileUrl} handleGetUrl={handleGetUrl} imagesUrl={PROFILE_IMAGES} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
