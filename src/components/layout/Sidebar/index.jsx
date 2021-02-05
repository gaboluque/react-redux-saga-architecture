import React from 'react';
import { Menu, Layout } from 'antd';
import { func, string } from 'prop-types';
import './sidebar.scss';
import routes from '../../../routing/routes';

const { Sider } = Layout;

const menu = routes.filter(({ title }) => ['Posts'].includes(title));

/**
 * Sidebar component
 * This component handles the sidebar menu
 *
 * @pathname - (redux) the actual pathname from the router
 * @goTo     - (redux) function mapped to react-router-redux "push"
 *
 */
const Sidebar = ({ pathname, goTo }) => {
  const handleClick = (path) => () => goTo(path);

  return (
    <Sider width={200} className="sidebar">
      <Menu mode="inline" selectedKeys={pathname} className="sidebar-menu">
        {menu.map((route) => (
          <Menu.Item key={route.path} onClick={handleClick(route.path)}>
            {route.title}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

Sidebar.propTypes = {
  pathname: string.isRequired,
  goTo: func.isRequired,
};

export default Sidebar;
