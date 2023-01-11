import { Navigate } from 'react-router-dom';
import { RouteObjectIn } from '../interface';
import Page404 from '@/view/Page404';
import useService from '../service';
import React from 'react';
import game from './game/index';

const Routes = () => {
  const { lazyLoad } = useService();

  const routes: RouteObjectIn[] = [
    {
      path: '/',
      element: <Navigate to='/LostArk-Strategies/' />,
      meta: {
        title: '首頁 | LostArk Strategies 失落的方舟攻略網',
      },
    },
    {
      path: '*',
      element: <Page404 />,
      meta: {
        title: 'Page not found | LostArk Strategies 失落的方舟攻略網',
      },
    },
    {
      path: '/LostArk-Strategies/',
      element: lazyLoad(React.lazy(() => import('@/component/LAS/index'))),
      meta: {
        title: '首頁 | LostArk Strategies 失落的方舟攻略網',
      },
    },
  ];

  return [...routes, ...game()];
};

export default Routes;
