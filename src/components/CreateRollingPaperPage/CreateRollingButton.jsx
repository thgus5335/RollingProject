import postRolling from '../../apis/createRollingAPI';
import styles from './CreateRollingButton.module.css';
import { useCreateRollingContext } from '../../hooks/useCreateRollingContext';

const CreateRollingButton = () => {
  const { inputValue, selectedColor, selectedImageURL } = useCreateRollingContext();

  const handleCreateButtonClick = async () => {
    console.log(inputValue, selectedColor, selectedImageURL);
    const postData = {
      name: inputValue,
      backgroundColor: selectedColor,
      backgroundImageURL: selectedImageURL,
    };

    postRolling(postData);
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
