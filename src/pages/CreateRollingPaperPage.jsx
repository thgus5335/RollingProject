import ToInput from '../components/CreateRollingPaperPage/ToInput';
import CreateRollingButton from '../components/CreateRollingPaperPage/CreateRollingButton';
// import { useState } from 'react';
// import postRolling from '../apis/createRollingAPI';
import PickBackground from '../components/CreateRollingPaperPage/PickBackground';
import { AppProvider } from '../hooks/useCreateRollingContext';

const CreateRollingPaperPage = () => {
  // const [name, setName] = useState('');

  // const handleNameChange = inputValue => {
  //   setName(inputValue);
  // };

  return (
    <AppProvider>
      <main>
        <ToInput />
        <PickBackground />
        <CreateRollingButton />
      </main>
    </AppProvider>
  );
};

export default CreateRollingPaperPage;
