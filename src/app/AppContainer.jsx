import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale/es_ES';
import React from 'react';
import RoutesContainer from './RoutesContainer';
import AppLayout from '../components/layout/AppLayout';
import './app.scss';

/**
 * This is the main entry app component. Here we wll define the actual app layout
 * and locale provider
 *
 */
const AppContainer = () => {
  return (
    <ConfigProvider locale={esES}>
      <AppLayout>
        <RoutesContainer />
      </AppLayout>
    </ConfigProvider>
  );
};

export default AppContainer;
