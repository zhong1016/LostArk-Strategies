import { useEffect } from 'react';
import useQuery from './component/api/query';
import { favorabilityIn } from './component/favorability/interface';
import Routes from './route/index';
import Content from './view/layout/TheContent';

const App = () => {
  /**
   * hook
   */
  const { api, get } = useQuery();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let res = await get<favorabilityIn[]>(api.favorabilities);
  };
  return <Content component={<Routes />} />;
};

export default App;
