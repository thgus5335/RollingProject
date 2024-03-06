import postRolling from '../../apis/createRollingAPI';
import styles from './CreateRollingButton.module.css';
import { useCreateRollingContext } from '../../hooks/useCreateRollingContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateRollingButton = () => {
  const { inputValue, selectedColor, selectedImageURL } = useCreateRollingContext();
  const [id, setId] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      navigate(`/post/${id}`);
    }
  }, [id, navigate]);
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
