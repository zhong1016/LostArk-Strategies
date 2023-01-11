import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useService from './service/index';

const Sidebar = () => {
  /**
   * default
   */
  const { MenuItems } = useService();
  /**
   * hook
   */
  const navigate = useNavigate();
  const location = useLocation();
  /**
   * state
   */
  const [selectedKey, setSelectedKey] = useState('');
  /**
   * func
   */
  const onMenu = (path: string) => {
    navigate(`/LostArk-Strategies/${path}`);
  };

  /**
   * Effect
   */
  useEffect(() => {
    init();
  }, [location]);

  // init
  const init = () => {
    setSelectedKey(location.pathname.replace('/LostArk-Strategies/', ''));
  };

  return (
    <Menu
      className='bg-zinc-800'
      onClick={(e) => onMenu(e.key)}
      mode='inline'
      theme='dark'
      openKeys={['game']}
      selectedKeys={[selectedKey]}
      items={MenuItems}
    />
  );
};

export default Sidebar;
