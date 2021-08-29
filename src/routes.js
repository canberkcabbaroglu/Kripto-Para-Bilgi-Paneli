import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import Price from './pages/Price';
import News from './pages/News';
import Exchange from './pages/Exchange';
import General from './pages/General';
import Page404 from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/general" replace /> },
        { path: 'general', element: <General /> },
        { path: 'price', element: <Price /> },
        { path: 'exchange', element: <Exchange /> },
        { path: 'news', element: <News /> },
        { path: '404', element: <Page404 /> }
      ]
    }
  ]);
}
