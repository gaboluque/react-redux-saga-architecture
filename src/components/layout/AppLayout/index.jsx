import React from 'react';
import { Layout } from 'antd';
import { func, node, string } from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Breadcrumb from '../Breadcrumb';
import Sidebar from '../Sidebar';
import './appLayout.scss';

const { Header, Content } = Layout;

/**
 * This is the main app layout component. We define elements like
 * header and sidebar, it will render any children passed as props inside
 * the layout content.
 *
 * In this case, we will connect this Parent component to redux to get the
 * pathname and other router functions to pass to @Breadcrumb and @Sidebar
 * since both have the same redux dependencies.
 *
 * @children        - Children prop, will render a react node inside the layout
 * @pathname        - (redux) the actual pathname from the router
 * @goTo            - (redux) function mapped to react-router-redux "push"
 */
const AppLayout = ({ children, pathname, goTo }) => {
  return (
    <Layout className="app-layout">
      <Header className="header">
        <span>My App</span>
      </Header>
      <Layout>
        <Sidebar pathname={pathname} goTo={goTo} />
        <Layout className="app-layout-content">
          <Breadcrumb pathname={pathname} goTo={goTo} />
          <Content className="content">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

AppLayout.propTypes = {
  children: node.isRequired,
  pathname: string.isRequired,
  goTo: func.isRequired,
};

const mapStateToProps = ({ router: { location } }) => ({
  pathname: location.pathname,
});

const mapDispatchToProps = {
  goTo: push,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
