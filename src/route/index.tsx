import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import Routes from './routes/index';
import useService from './service/index';

const RouteGuards = () => {
  const { beforeEach } = useService();
  return useRoutes(beforeEach(Routes()));
};

export default RouteGuards;
