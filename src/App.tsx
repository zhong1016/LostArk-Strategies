import { useEffect } from 'react';
import Routes from './route/index';
import Content from './view/layout/TheContent';

const App = () => {
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    fetch('/public/api/v1/test/user.json')
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  };
  return <Content component={<Routes />} />;
};

export default App;
