import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { RouteObjectIn } from '../interface';

const useService = () => {
  /**
   * hook
   */
  const location = useLocation();

  // Route BeforeEach
  const beforeEach = (route: RouteObjectIn[]): RouteObjectIn[] => {
    route.forEach((to) => {
      // 判斷 path
      if (to.path === location.pathname) {
        document.title = to.meta.title;
      }
    });
    return route;
  };

  // lazy
  const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
    return (
      <Suspense fallback={<></>}>
        <Comp />
      </Suspense>
    );
  };
  return { beforeEach, lazyLoad };
};

export default useService;
