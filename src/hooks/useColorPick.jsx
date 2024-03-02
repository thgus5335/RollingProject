import { useCreateRollingContext } from './useCreateRollingContext';

const useColorPick = () => {
  const { inputValue, selectedColor, selectedImageURL, setContextValues } = useCreateRollingContext();
  const handleClickColor = color => {
    setContextValues(inputValue, color, selectedImageURL);
  };

  return { selectedColor, handleClickColor };
};

export default useColorPick;
