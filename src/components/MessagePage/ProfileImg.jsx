// import { useState } from 'react';

import styles from './ProfileImg.module.css';
import { useState } from 'react';
import uploadImage from '../../apis/uploadImage';
import plusIcon from '../../assets/icons/plus.svg';

const ProfileImg = ({ profileUrl, handleGetUrl, imagesUrl, setIsImageClicked }) => {
  const [imgURL, setImgURL] = useState('');
  const handleImageUpload = async e => {
    const uploadedFile = e.target.files[0];

    try {
      const uploadedImageURL = await uploadImage({ file: uploadedFile });
      // const uploadedImageURL = URL.createObjectURL(uploadedFile);
      setImgURL(uploadedImageURL);
      setIsImageClicked(uploadedImageURL);
      console.log(imgURL);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return (
    <div className={styles.profileImgList}>
      <label htmlFor="imageInput">
        <img src={plusIcon} alt="plus icon" className={styles.image} />
      </label>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageUpload}
        className={` ${styles.input} `}
      />
      {imagesUrl.map((imageUrl, index) => (
        <img
          className={`${styles.image} ${profileUrl === imageUrl ? styles.selected : ''}`}
          onClick={e => handleGetUrl(e, imageUrl)}
          key={index}
          src={imageUrl}
        />
      ))}
      {imgURL.length > 0 && (
        <img
          src={imgURL}
          alt="userImage"
          className={`${styles.image} ${profileUrl === imgURL ? styles.selected : ''}`}
          onClick={e => handleGetUrl(e, imgURL)}
        />
      )}
    </div>
  );
};

export default ProfileImg;
