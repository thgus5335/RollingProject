import styles from './Profile.module.css';
import ProfileImg from './ProfileImg';
import plusIcon from '../../assets/icons/plus.svg';
import stylesImg from './ProfileImg.module.css';
import deleteIcon from '../../assets/icons/delete.svg';
import { useState } from 'react';
// import { useState } from 'react';
import uploadImage from '../../apis/uploadImage';
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [imgURL, setImgURL] = useState('');
  const handleGetUrl = e => {
    const newImgUrl = e.target.src;

    if (profileUrl !== newImgUrl) {
      onProfileUrlChange(newImgUrl);
    }
  };
  const handleImageUpload = async e => {
    const uploadedFile = e.target.files[0];

    try {
      const uploadedImageURL = await uploadImage({ file: uploadedFile });
      // const uploadedImageURL = URL.createObjectURL(uploadedFile);
      setImgURL(uploadedImageURL);
      console.log(imgURL);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  const handleDeleteImg = () => {
    onProfileUrlChange(customImgUrl);
  };
  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.title}>프로필 이미지</h1>
      <div className={styles.profileImage}>
        <label className={styles.label} htmlFor="imageInput">
          {isHovered && profileUrl === customImgUrl ? (
            <img
              src={plusIcon}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              alt="plus icon"
              className={`${styles.customImg} ${styles.plusIcon}`}
            />
          ) : (
            <div className={styles.customImgContainer}>
              {isHovered && profileUrl !== customImgUrl && (
                <img
                  className={styles.delete}
                  src={deleteIcon}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleDeleteImg}
                />
              )}
              <img
                className={styles.customImg}
                src={profileUrl}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={e => handleGetUrl(e)}
              />
            </div>
          )}
          {/* {isHovered && profileUrl !== customImgUrl && <div className={styles.delete}>삭제</div>} */}
        </label>

        {profileUrl === customImgUrl ? (
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={handleImageUpload}
            className={` ${stylesImg.input} `}
          />
        ) : null}

        <div className={styles.imageSelect}>
          <div>프로필 이미지를 선택해주세요!</div>
          <ProfileImg imgURL={imgURL} profileUrl={profileUrl} handleGetUrl={handleGetUrl} imagesUrl={PROFILE_IMAGES} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
