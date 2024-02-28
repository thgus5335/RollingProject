import profileImg1 from '../../assets/images/profile-img1.png';
import profileImg2 from '../../assets/images/profile-img2.png';
import styles from './ProfileImg.module.css';
const ProfileImg = () => {
  const images = [
    profileImg1,
    profileImg2,
    profileImg1,
    profileImg2,
    profileImg1,
    profileImg2,
    profileImg1,
    profileImg2,
    profileImg1,
    profileImg2,
  ];

  return (
    <div className={styles.profileImgList}>
      {images.map((image, index) => (
        <img className={styles.image} key={index} src={image} />
      ))}
    </div>
  );
};

export default ProfileImg;
