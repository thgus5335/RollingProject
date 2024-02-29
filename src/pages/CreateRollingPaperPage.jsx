import styles from './CreateRollingPaperPage.module.css';
import ToInput from '../components/CreateRollingPaperPage/ToInput';
import checkIcon from '../assets/icons/check.svg';
// import car from '../assets/images/car.png';
// import arches from '../assets/images/arches.png';
import { useState } from 'react';
import { postRolling } from '../apis/createRollingAPI';
import uploadImage from '../apis/uploadImage';

const CreateRollingPaperPage = () => {
  const COLORS = ['beige', 'purple', 'blue', 'green'];
  const IMAGES = [
    // { alt: 'car', source: car },
    // { alt: 'arches', source: arches },
    {
      alt: 'cat',
      source: 'https://static.india.com/wp-content/uploads/2015/10/8-wallpaperhd1.jpg',
    },
    {
      alt: 'dog',
      source: 'https://i0.wp.com/regroove.ca/wp-content/uploads/2021/10/pexels-photo-2607544.jpeg?fit=1024%2C682&ssl=1',
    },
  ];
  const [selectedColor, setSelectedColor] = useState('beige');
  const [selectedImage, setSelectedImage] = useState('car');
  const [selectedImageURL, setSelectedImageURL] = useState('');
  const [selectedButton, setSelectedButton] = useState('color');
  const [name, setName] = useState('');
  const [imgURL, setImgURL] = useState('');

  const handleClickColorButton = () => {
    setSelectedButton('color');
  };

  const handleClickImageButton = () => {
    setSelectedButton('image');
  };

  const handleClickColor = color => {
    setSelectedColor(color);
  };

  const handleImageUpload = async e => {
    const uploadedFile = e.target.files[0];

    try {
      // Call uploadImage to upload the image and get the URL
      const uploadedImageURL = await uploadImage({ file: uploadedFile });
      setImgURL(uploadedImageURL);
      console.log(imgURL);
    } catch (error) {
      // Handle any errors during the upload
      console.error('Error uploading image:', error);
    }
  };

  const handleClickImage = images => {
    setSelectedImage(images.alt);
    setSelectedImageURL(images.source);
  };

  const handleClickUploadedImage = () => {
    setSelectedImage(imgURL);
    setSelectedImageURL(imgURL);
  };

  const handleNameChange = inputValue => {
    setName(inputValue);
  };

  const handleCreateButtonClick = async () => {
    const postData = {
      name: name,
      backgroundColor: selectedColor,
      backgroundImageURL: selectedImageURL,
    };

    postRolling(postData);
    console.log(postData);
  };

  return (
    <main>
      <ToInput onNameChange={handleNameChange} />
      <div>
        <h1>배경화면을 선택해 주세요.</h1>
        <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
        <button
          className={`${styles.toggleButton} ${selectedButton === 'color' && styles.toggleButtonOn}`}
          onClick={handleClickColorButton}>
          컬러
        </button>
        <button
          className={`${styles.toggleButton} ${selectedButton === 'image' && styles.toggleButtonOn}`}
          onClick={handleClickImageButton}>
          이미지
        </button>
      </div>
      {selectedButton === 'color' ? (
        <div className={styles.pickerContainer}>
          {COLORS.map((color, index) => (
            <div key={index} className={`${styles.pickerBox} ${styles[color]}`} onClick={() => handleClickColor(color)}>
              {selectedColor === color && <img src={checkIcon} alt="check" className={styles.check} />}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className={styles.pickerContainer}>
            {IMAGES.map(images => (
              <div key={images.alt} className={`${styles.pickerBox} `} onClick={() => handleClickImage(images)}>
                <img
                  src={images.source}
                  alt={images.alt}
                  className={selectedImage === images.alt && styles.imagesOpacity}
                />

                {selectedImage === images.alt && <img src={checkIcon} alt="check" className={styles.check} />}
              </div>
            ))}
            {imgURL.length > 0 && (
              <div className={`${styles.pickerBox} `} onClick={() => handleClickUploadedImage()}>
                <img src={imgURL} alt="userImage" className={selectedImage === imgURL && styles.imagesOpacity} />
                {selectedImage === imgURL && <img src={checkIcon} alt="check" className={styles.check} />}
              </div>
            )}
            <input type="file" accept="image/*" onChange={handleImageUpload} className={styles.pickerBox} />
          </div>
        </div>
      )}

      <button
        onClick={handleCreateButtonClick}
        disabled={name.length === 0}
        className={`${styles.createButton} ${name.length > 0 && styles.activateButton}`}>
        생성하기
      </button>
    </main>
  );
};

export default CreateRollingPaperPage;
