import React from 'react';
import { Card, Col, Row, Tooltip } from 'antd';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { InfoCircleOutlined } from '@ant-design/icons';
import LogInForm from './components/LogInForm';
import { logInNotifier } from '../../../redux/modules/auth/actions/logIn';
import './logIn.scss';

const tooltipData = (
  <p>
    username: test
    <br />
    password: test
  </p>
);

const LogIn = ({ logIn }) => {
  return (
    <Row className="log-in" justify="center" align="middle">
      <Col xs={24} md={12} lg={10}>
        <Card
          title="Log in"
          extra={
            <Tooltip title={tooltipData}>
              <InfoCircleOutlined />
            </Tooltip>
          }
        >
          <LogInForm submitLogIn={logIn} />
        </Card>
      </Col>
    </Row>
  );
};

LogIn.propTypes = {
  logIn: func.isRequired,
};

LogIn.defaultProps = {};

const mapDispatchToProps = {
  logIn: logInNotifier,
};

export default connect(null, mapDispatchToProps)(LogIn);
