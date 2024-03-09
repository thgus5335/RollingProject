import useName from '../../hooks/useName';
import Input from '../common/Input';

const ToInput = () => {
  const { error, inputValue, handleInputChange, handleInputBlur } = useName();

  return <Input name={inputValue} onChange={handleInputChange} onBlur={handleInputBlur} who="To" error={error} />;
};

export default ToInput;
