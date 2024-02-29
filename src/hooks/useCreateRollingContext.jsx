import { createContext, useContext, useState } from 'react';

const CreateRollingContext = createContext();

export const AppProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedColor, setSelectedColor] = useState('beige');
  const [selectedImageURL, setSelectedImageURL] = useState('');

  const setContextValues = (name, color, imageURL) => {
    setInputValue(name);
    setSelectedColor(color);
    setSelectedImageURL(imageURL);
  };

  const contextValues = {
    inputValue,
    selectedColor,
    selectedImageURL,
    setContextValues,
  };

  return <CreateRollingContext.Provider value={contextValues}>{children}</CreateRollingContext.Provider>;
};

export const useCreateRollingContext = () => {
  return useContext(CreateRollingContext);
};
