import { createBrowserRouter } from 'react-router-dom';
import CreateRollingPaperPage from './pages/CreateRollingPaperPage';
import ListPage from './pages/ListPage';
import Layout from './components/HomePage/Layout';
import MessagePage from './pages/MessagePage';
import RollingPaperPage from './pages/RollingPaperPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'list',
        element: <ListPage />,
      },
      {
        path: 'post',
        element: <CreateRollingPaperPage />,
      },
      {
        path: 'post/:id',
        element: <RollingPaperPage />,
      },
      {
        path: 'post/:id/message',
        element: <MessagePage />,
      },
      // { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
