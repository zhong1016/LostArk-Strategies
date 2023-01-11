import { NonIndexRouteObject } from 'react-router-dom';

interface RouteObjectIn extends NonIndexRouteObject {
  meta: MetaIn;
  children?: RouteObjectIn[];
}

interface MetaIn {
  title: string;
}

export { type RouteObjectIn };
