import postRolling from '../../apis/createRollingAPI';
import styles from './CreateRollingButton.module.css';
import { useCreateRollingContext } from '../../hooks/useCreateRollingContext';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const CreateRollingButton = () => {
  const { inputValue, selectedColor, selectedImageURL } = useCreateRollingContext();
  const [id, setId] = useState('');
  useEffect(() => {
    // Check if id is truthy before navigating
    if (id) {
      window.location.href = `/post/${id}`;
    }
  }, [id]);
  const handleCreateButtonClick = async () => {
    console.log(inputValue, selectedColor, selectedImageURL);
    const postData = {
      name: inputValue,
      backgroundColor: selectedColor,
      backgroundImageURL: selectedImageURL,
    };
    const createdId = await postRolling(postData);
    setId(createdId);
  };
  return (
    <button
      onClick={handleCreateButtonClick}
      disabled={inputValue.length === 0}
      className={`${styles.createButton} ${inputValue.length > 0 && styles.activateButton}`}>
      생성하기
    </button>
  );
};

export default CreateRollingButton;
