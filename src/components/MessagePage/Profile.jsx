import styles from './Profile.module.css';
import customImg from '../../assets/images/custom.png';
import ProfileImg from './ProfileImg';
const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.title}>프로필 이미지</h1>
      <div className={styles.profileImage}>
        <img className={styles.customImg} src={customImg} />
        <div className={styles.imageSelect}>
          <div>프로필 이미지를 선택해주세요!</div>
          <ProfileImg />
        </div>
      </div>
    </div>
  );
};

export default Profile;
