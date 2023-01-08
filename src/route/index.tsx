import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import routes from './routes/index';
import useService from './service/index';

const RouteGuards = () => {
  const { beforeEach } = useService();

  return useRoutes(beforeEach(routes));
};

export default RouteGuards;
