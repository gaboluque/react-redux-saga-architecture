import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale/es_ES';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bool, func, string } from 'prop-types';
import { changeLanguageNotifier } from '../redux/modules/layout/actions/changeLanguage';
import RoutesContainer from './RoutesContainer';
import AppLayout from '../components/layout/AppLayout';
import './app.scss';
import Loader from '../components/layout/Loader';

/**
 * This is the main entry app component. Here we wll define the actual app layout
 * and locale provider
 *
 */
const AppContainer = ({
  pathname,
  goTo,
  language,
  setLanguage,
  token,
  role,
  loading,
}) => {
  return (
    <ConfigProvider locale={esES}>
      {loading && <Loader transparent />}
      <AppLayout
        goTo={goTo}
        pathname={pathname}
        language={language}
        setLanguage={setLanguage}
        token={token}
      >
        <RoutesContainer role={role} />
      </AppLayout>
    </ConfigProvider>
  );
};

AppContainer.propTypes = {
  pathname: string.isRequired,
  goTo: func.isRequired,
  setLanguage: func.isRequired,
  language: string.isRequired,
  loading: bool.isRequired,
  token: string,
  role: string,
};

AppContainer.defaultProps = {
  token: null,
  role: null,
};

const mapStateToProps = ({
  router: { location },
  layout: { language, loading },
  auth: { token, role },
}) => ({
  pathname: location.pathname,
  language,
  loading,
  token,
  role,
});

const mapDispatchToProps = {
  goTo: push,
  setLanguage: changeLanguageNotifier,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
