import { useState } from 'react';
import plusIcon from '../../assets/icons/plus.svg';
import styles from './Profile.module.css';
import uploadImage from '../../apis/uploadImage';
const MainProfile = ({ customImgUrl, profileUrl, onProfileUrlChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageUpload = async e => {
    setIsHovered(false);
    const uploadedFile = e.target.files[0];

    try {
      const uploadedImageURL = await uploadImage({ file: uploadedFile });
      // const uploadedImageURL = URL.createObjectURL(uploadedFile);
      onProfileUrlChange(uploadedImageURL);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleRemoveUrl = () => {
    onProfileUrlChange(customImgUrl);
  };

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
      {/* 프로필 선택이 아무 것도 안 됐을 때 */}
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
            //hover 안 됐을 때 기본 이미지
            <div className={styles.customImgContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <img width="80px" height="80px" className={styles.customImg} src={customImgUrl} />
            </div>
          )}
        </>
      ) : (
        <>
          {/* 프로필 이미지가 기본 이미지 아닐 때  */}
          <div className={styles.customImgContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img width="80px" height="80px" className={styles.customImg} src={profileUrl} />
            {/* 호버 했을 때 */}
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
