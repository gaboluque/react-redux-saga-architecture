import React from 'react';
import { Input } from 'antd';
import { func } from 'prop-types';
import FormGenerator from '../../../../../components/form/FormGenerator';

const NewPostForm = ({ submitPost }) => {
  const fields = [
    {
      name: 'title',
      placeholder: 'Title',
      component: Input,
      layout: { col: { span: 12 } },
    },
    {
      name: 'body',
      placeholder: 'Body',
      layout: { col: { span: 12 } },
      component: Input,
    },
  ];

  const layout = { gutter: 16 };

  return (
    <div className="new-post-form">
      <FormGenerator onSubmit={submitPost} fields={fields} layout={layout} />
    </div>
  );
};

NewPostForm.propTypes = {
  submitPost: func.isRequired,
};

NewPostForm.defaultProps = {};

export default NewPostForm;
