import styles from './Picker.module.css';
import useImagePick from '../../hooks/useImagePick';
import plusIcon from '../../assets/icons/plus.svg';
import ImageBox from './ImageBox';

const ImagePicker = () => {
  const IMAGES = [
    {
      alt: '기본 배경화면(하늘)',
      source: 'https://i.imgur.com/VmxlXCv.jpeg',
    },
    {
      alt: '기본 배경화면(팀원)',
      source: 'https://i.imgur.com/Edg1mom.png',
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
