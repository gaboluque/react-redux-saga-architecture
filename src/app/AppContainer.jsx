import { ConfigProvider, Layout } from 'antd';
import esES from 'antd/es/locale/es_ES';
import React from 'react';
import './app.scss';
import RoutesContainer from './RoutesContainer';

const AppContainer = () => {
  return (
    <ConfigProvider locale={esES}>
      <Layout className="app-container">
        <Layout className="layout">
          <main>
            <RoutesContainer />
          </main>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

AppContainer.propTypes = {};

AppContainer.defaultProps = {};

export default AppContainer;
