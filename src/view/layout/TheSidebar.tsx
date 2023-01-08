import { Menu, MenuProps } from 'antd';
const Sidebar = () => {
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  const items: MenuItem[] = [
    getItem('Navigation One', 'sub1', '', [
      getItem('Option 5', '1'),
      getItem('Option 6', '2'),
      getItem('Option 7', '3'),
      getItem('Option 8', '4'),
    ]),
  ];
  return (
    <Menu
      className="bg-zinc-900 "
      defaultSelectedKeys={['']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
};

export default Sidebar;
