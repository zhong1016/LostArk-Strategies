import { RouteObjectIn } from '@/route/interface';
import useService from '@/route/service';
import React from 'react';

const GameRoutes = () => {
  const { lazyLoad } = useService();

  const routes: RouteObjectIn[] = [
    {
      path: '/LostArk-Strategies/game/favorability',
      element: lazyLoad(React.lazy(() => import('@/view/game/Favorability'))),
      meta: {
        title: '好友度 | LostArk Strategies 失落的方舟攻略網',
      },
    },
    {
      path: '/LostArk-Strategies/game/adventureBook',
      element: lazyLoad(React.lazy(() => import('@/view/game/AdventureBook'))),
      meta: {
        title: '冒險之書 | LostArk Strategies 失落的方舟攻略網',
      },
    },
  ];
  return routes;
};

export default GameRoutes;
