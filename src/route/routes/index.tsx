import NotPage from '@/view/404';
import { Navigate } from 'react-router-dom';
import { RouteObjectIn } from '../interface';

const routes: RouteObjectIn[] = [
  {
    path: '/',
    element: <Navigate to="/LostArk-Strategies" />,
    meta: {
      title: '首頁 | LostArk 攻略網',
    },
  },
  {
    path: '/LostArk-Strategies',
    element: <NotPage />,
    meta: {
      title: '首頁 | LostArk 攻略網',
    },
  },
];

export default routes;
