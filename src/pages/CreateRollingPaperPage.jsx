import ToInput from '../components/CreateRollingPaperPage/ToInput';
import CreateRollingButton from '../components/CreateRollingPaperPage/CreateRollingButton';
import PickBackground from '../components/CreateRollingPaperPage/PickBackground';
import { AppProvider } from '../hooks/useCreateRollingContext';
import styles from './CreateRollingPaperPage.module.css';

const CreateRollingPaperPage = () => {
  return (
    <AppProvider>
      <main>
        <div className={styles.container}>
          <ToInput />
          <PickBackground />
          <CreateRollingButton />
        </div>
      </main>
    </AppProvider>
  );
};

export default CreateRollingPaperPage;
