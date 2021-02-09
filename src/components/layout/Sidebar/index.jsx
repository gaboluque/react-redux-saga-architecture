import React from 'react';
import { Menu, Layout } from 'antd';
import { func, string } from 'prop-types';
import './sidebar.scss';
import menu from '../../../routing/menu';

const { Sider } = Layout;

/**
 * Sidebar component
 * This component handles the sidebar menu
 *
 * @pathname - (redux) the actual pathname from the router
 * @goTo     - (redux) function mapped to react-router-redux "push"
 *
 */
const Sidebar = ({ pathname, goTo, role }) => {
  const handleClick = (path) => () => goTo(path);

  return (
    <Sider width={200} className="sidebar">
      <Menu mode="inline" selectedKeys={pathname} className="sidebar-menu">
        {menu[role].map(({ path, icon: Icon, title }) => (
          <Menu.Item key={path} icon={<Icon />} onClick={handleClick(path)}>
            {title}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

Sidebar.propTypes = {
  pathname: string.isRequired,
  goTo: func.isRequired,
  role: string,
};

Sidebar.defaultProps = {
  role: 'public',
};

export default Sidebar;
