import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import { t } from '../../i18n';
import LogIn from '../Auth/LogIn';

const Home = ({ token }) => {
  if (!token) return <LogIn />;
  return <div className="home">{t('Hello team')}</div>;
};

Home.propTypes = {
  token: string,
};

Home.defaultProps = {
  token: null,
};

const mapStateToProps = ({ auth }) => ({
  token: auth.token,
});

export default connect(mapStateToProps)(Home);
