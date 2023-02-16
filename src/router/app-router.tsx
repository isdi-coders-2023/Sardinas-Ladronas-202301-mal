import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import Detail from '../pages/Detail/Detail';
import Home from '../pages/Home/Home';
import MyRecipes from '../pages/MyRecipes/MyRecipes';
import NotFound from '../pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: ':letter',
        element: <Home />,
      },
      {
        path: 'myrecipes',
        element: <MyRecipes />,
      },
      {
        path: 'detail',
        element: <Detail />,
      },
    ],
  },
]);
