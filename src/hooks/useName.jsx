import { useState } from 'react';
import { useCreateRollingContext } from './useCreateRollingContext';

const useName = () => {
  const { inputValue, selectedColor, selectedImageURL, setContextValues } = useCreateRollingContext();

  const handleInputChange = e => {
    setContextValues(e.target.value, selectedColor, selectedImageURL);
    setError(false);
  };

  const [error, setError] = useState(false);

  const handleInputBlur = () => {
    if (inputValue.trim() === '') {
      setError(true);
    }
  };

  return { error, inputValue, handleInputChange, handleInputBlur };
};

export default useName;
