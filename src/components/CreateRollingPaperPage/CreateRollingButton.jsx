import postRolling from '../../apis/createRollingAPI';
import { useCreateRollingContext } from '../../hooks/useCreateRollingContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

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
    <Button size="large" onClick={handleCreateButtonClick} isDisabled={inputValue.length === 0}>
      생성하기
    </Button>
  );
};

export default CreateRollingButton;
