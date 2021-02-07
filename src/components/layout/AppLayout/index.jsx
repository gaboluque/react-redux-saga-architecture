import React, { useEffect } from 'react';
import { Button, Col, Layout, Row } from 'antd';
import { func, node, string } from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import i18n from 'i18next';
import Breadcrumb from '../Breadcrumb';
import Sidebar from '../Sidebar';
import './appLayout.scss';
import { changeLanguageNotifier } from '../../../redux/modules/layout/actions/changeLanguage';

const { Header, Content, Footer } = Layout;

const lngButton = (lng, action) => (
  <Button onClick={() => action(lng)} type="link">
    {lng.toUpperCase()}
  </Button>
);

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
const AppLayout = ({ children, pathname, goTo, language, setLanguage }) => {
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

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
          <Footer>
            <Row>
              <Col md={20}>{process.env.REACT_APP_NAME}</Col>
              <Col md={4}>
                {lngButton('es', setLanguage)}
                {'/'}
                {lngButton('en', setLanguage)}
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

AppLayout.propTypes = {
  children: node.isRequired,
  pathname: string.isRequired,
  goTo: func.isRequired,
  setLanguage: func.isRequired,
  language: string.isRequired,
};

const mapStateToProps = ({ router: { location }, layout }) => ({
  pathname: location.pathname,
  language: layout.language,
});

const mapDispatchToProps = {
  goTo: push,
  setLanguage: changeLanguageNotifier,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
