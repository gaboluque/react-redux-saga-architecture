import React from 'react';
import { Input } from 'antd';
import { func } from 'prop-types';
import FormGenerator from '../../../../../components/form/FormGenerator';

const LogInForm = ({ submitLogIn }) => {
  const fields = [
    {
      name: 'username',
      placeholder: 'Username',
      component: Input,
      layout: { col: { span: 24 } },
    },
    {
      name: 'password',
      placeholder: 'Password',
      layout: { col: { span: 24 } },
      component: Input.Password,
    },
  ];

  const layout = { gutter: 16 };

  return (
    <div className="log-in-form">
      <FormGenerator onSubmit={submitLogIn} fields={fields} layout={layout} />
    </div>
  );
};

LogInForm.propTypes = {
  submitLogIn: func.isRequired,
};

LogInForm.defaultProps = {};

export default LogInForm;
