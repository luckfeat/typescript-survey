import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Survey from '../pages/Survey';
import Edit from '../pages/Edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/survey/:surveyId',
    element: <Survey />,
  },
  {
    path: '/survey/:surveyId/edit',
    element: <Edit />,
  },
]);

export default router;
