
import './styles/global.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer 
        toastStyle={{
          backgroundColor: 'black',
          color: 'white'
        }}
      />
    </div>
  );
}

export default App;

