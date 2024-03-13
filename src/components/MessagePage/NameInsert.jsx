import { useState } from 'react';
import Input from '../common/Input';

const NameInsert = ({ name, onNameChange }) => {
  const [noValueInput, setNoValueInput] = useState(false);

  const handleChangeName = e => {
    const newName = e.target.value;
    onNameChange(newName);
  };

  const handleBlurFromInput = () => {
    setNoValueInput(name.trim().length === 0);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' && name === '') {
      setNoValueInput(true);
    } else {
      setNoValueInput(false);
    }
  };

  return (
    <Input
      name={name}
      onChange={handleChangeName}
      onBlur={handleBlurFromInput}
      who="From"
      onKeyDown={handleKeyDown}
      error={noValueInput}
    />
  );
};
export default NameInsert;
