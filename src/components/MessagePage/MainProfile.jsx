import { useState } from 'react';
import plusIcon from '../../assets/icons/plus.svg';
import styles from './Profile.module.css';
import uploadImage from '../../apis/uploadImage';
const MainProfile = ({ customImgUrl, profileUrl, onProfileUrlChange }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //   const [imgURL, setImgURL] = useState('');

  const handleImageUpload = async e => {
    setIsHovered(false);
    const uploadedFile = e.target.files[0];
    console.log(uploadedFile);

    try {
      const uploadedImageURL = await uploadImage({ file: uploadedFile });
      // const uploadedImageURL = URL.createObjectURL(uploadedFile);
      console.log(uploadedImageURL);
      onProfileUrlChange(uploadedImageURL);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  const handleRemoveUrl = () => {
    onProfileUrlChange(customImgUrl);
  };
  console.log(customImgUrl);
  console.log(profileUrl);
  console.log(profileUrl === customImgUrl);
  return (
    <>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageUpload}
        className={styles.input}
        style={{ display: 'none' }}
      />
      {profileUrl === customImgUrl ? (
        <>
          {isHovered ? (
            <label className={styles.label} htmlFor="imageInput">
              <div
                className={styles.customImgContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <img
                  width="80px"
                  height="80px"
                  src={plusIcon}
                  alt="plus icon"
                  className={`${styles.customImg} ${styles.plusIcon}`}
                />
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className={` ${styles.input} `}
                />
              </div>
            </label>
          ) : (
            <div className={styles.customImgContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img width="80px" height="80px" className={styles.customImg} src={customImgUrl} />
            </div>
          )}
        </>
      ) : (
        <>
          <div className={styles.customImgContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img width="80px" height="80px" className={styles.customImg} src={profileUrl} />
            {isHovered && (
              <div onClick={handleRemoveUrl} className={styles.delete}>
                삭제하기
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default MainProfile;
