import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import Dashboard from '../pages/Dashboard';
import { checkAuth, redirectIfAuth } from '../utils/helper';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/dashboard',
        loader: checkAuth,
        element: <Dashboard />,
      },
      {
        path: '/login',
        loader: redirectIfAuth,
        element: <LoginPage />,
      },
      {
        path: '/signup',
        loader: redirectIfAuth,
        element: <SignupPage />,
      },
    ],
  },
]);