import { createBrowserRouter } from 'react-router-dom';
import ListPage from './pages/ListPage';
// import CreateRollingPaperPage from './pages/CreateRollingPaperPage';

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
        element: <ListPage />,
      },
      {
        path: 'post',
        // element: <CreateRollingPaperPage />,
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
