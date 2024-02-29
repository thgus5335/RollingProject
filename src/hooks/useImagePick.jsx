import { useState } from 'react';
import uploadImage from '../apis/uploadImage';
import { useCreateRollingContext } from './useCreateRollingContext';

const useImagePick = () => {
  const { inputValue, selectedColor, selectedImageURL, setContextValues } = useCreateRollingContext();
  // const [selectedImage, setSelectedImage] = useState('cat');
  // const [selectedImageURL, setSelectedImageURL] = useState('');
  const [imgURL, setImgURL] = useState('');
  const handleImageUpload = async e => {
    const uploadedFile = e.target.files[0];

    try {
      const uploadedImageURL = await uploadImage({ file: uploadedFile });
      setImgURL(uploadedImageURL);
      console.log(imgURL);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  const handleClickImage = images => {
    // setSelectedImage(images.source);
    setContextValues(inputValue, selectedColor, images.source);
  };

  const handleClickUploadedImage = () => {
    // setSelectedImage(imgURL);
    setContextValues(inputValue, selectedColor, imgURL);
  };

  return { selectedImageURL, imgURL, handleImageUpload, handleClickImage, handleClickUploadedImage };
};

export default useImagePick;
