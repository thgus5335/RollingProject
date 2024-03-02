

import { createBrowserRouter } from 'react-router-dom';
import CreateRollingPaperPage from './pages/CreateRollingPaperPage';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <Layout />,
    children: [
      {
        path: '',
        // element: <Home />,
      },
      {
        path: 'list',
        // element: <List />,
      },
      {
        path: 'post',
        element: <CreateRollingPaperPage />,
      },
      {
        path: 'post/:id',
        // element: <Post />,
      },
      {
        path: 'post/:id/message',
        // element: <SendMessage />,
      },
      // { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;


