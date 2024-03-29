import { createBrowserRouter } from 'react-router-dom';
import CreateRollingPaperPage from './pages/CreateRollingPaperPage';
import ListPage from './pages/ListPage';
import MessagePage from './pages/MessagePage';
import RollingPaperPage from './pages/RollingPaperPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
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
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
