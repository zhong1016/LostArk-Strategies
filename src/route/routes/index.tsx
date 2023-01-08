import { Navigate } from 'react-router-dom';
import { RouteObjectIn } from '../interface';
import LAS from '@/component/LAS/index';

const routes: RouteObjectIn[] = [
  {
    path: '/',
    element: <Navigate to='/LostArk-Strategies/' />,
    meta: {
      title: '首頁 | LostArk Strategies 失落的方舟攻略網',
    },
  },
  {
    path: '/LostArk-Strategies/',
    element: <LAS />,
    meta: {
      title: '首頁 | LostArk Strategies 失落的方舟攻略網',
    },
  },
];

export default routes;
