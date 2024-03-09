import styles from './Picker.module.css';
// import checkIcon from '../../assets/icons/check.svg';
import useImagePick from '../../hooks/useImagePick';
import plusIcon from '../../assets/icons/plus.svg';
import ImageBox from './ImageBox';

const ImagePicker = () => {
  const IMAGES = [
    {
      alt: 'cat',
      source: 'https://static.india.com/wp-content/uploads/2015/10/8-wallpaperhd1.jpg',
    },
    {
      alt: 'dog',
      source: 'https://i0.wp.com/regroove.ca/wp-content/uploads/2021/10/pexels-photo-2607544.jpeg?fit=1024%2C682&ssl=1',
    },
  ];

  const { selectedImageURL, imgURL, handleImageUpload, handleClickImage, handleClickUploadedImage } = useImagePick();

  return (
    <div>
      <div className={styles.pickerContainer}>
        <label htmlFor="imageInput" className={`${styles.inputStyle} ${styles.pickerBox}`}>
          <img src={plusIcon} alt="plus icon" />
        </label>
        <input type="file" id="imageInput" accept="image/*" onChange={handleImageUpload} className={styles.input} />
        {/* {IMAGES.map(images => (
          <div key={images.alt} className={styles.pickerBox} onClick={() => handleClickImage(images)}>
            <img
              src={images.source}
              alt={images.alt}
              className={`${selectedImageURL === images.source && styles.imagesOpacity} ${styles.pickerImage} ${styles.imgOverlay}`}
            />
            <img src={checkIcon} alt="check" className={`${styles.checkOverlay} ${styles.check}`} />
            {selectedImageURL === images.source && <img src={checkIcon} alt="check" className={styles.check} />}
          </div>
        ))} */}
        {IMAGES.map(images => (
          <ImageBox
            onClick={() => handleClickImage(images)}
            key={images.alt}
            src={images.source}
            alt={images.alt}
            selectedImageURL={selectedImageURL}
          />
        ))}
        {imgURL.length > 0 && (
          // <div className={`${styles.pickerBox} `} onClick={() => handleClickUploadedImage()}>
          // //   <img
          //     src={imgURL}
          //     alt="userImage"
          //     className={`${selectedImageURL === imgURL && styles.imagesOpacity} ${styles.pickerImage} ${styles.imgOverlay}`}
          //   />
          //   <img src={checkIcon} alt="check" className={`${styles.checkOverlay} ${styles.check}`} />
          //   {selectedImageURL === imgURL && <img src={checkIcon} alt="check" className={styles.check} />}
          // </div>
          <ImageBox
            onClick={() => handleClickUploadedImage()}
            key={imgURL}
            src={imgURL}
            alt="custom img"
            selectedImageURL={selectedImageURL}
          />
        )}
      </div>
    </div>
  );
};

export default ImagePicker;
