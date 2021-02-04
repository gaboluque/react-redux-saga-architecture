import { Button, Form, Input } from 'antd';
import { func } from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logInNotifier } from '../../redux/modules/auth/actions/logIn';
import './logIn.scss';

const LogIn = ({ logIn }) => {
  const [form, setForm] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    logIn(form);
  };

  return (
    <div className="log-in-container">
      <h1>Log In</h1>
      <Form />
      <Input name="username" placeholder="Password" onChange={handleChange} />
      <Input.Password
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

LogIn.propTypes = {
  logIn: func.isRequired,
};

const mapDispatchToProps = {
  logIn: logInNotifier,
};

export default connect(null, mapDispatchToProps)(LogIn);
