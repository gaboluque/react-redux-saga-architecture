import { func } from 'prop-types';
import React from 'react';
import { Card, Input } from 'antd';
import { connect } from 'react-redux';
import FormGenerator from '../../../components/form/FormGenerator';
import { createPostsNotifier } from '../../../redux/modules/posts/actions/createPost';
import './newPost.scss';

const NewPost = ({ createPost }) => {
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
    <Card className="sample-form-container" title="Post form">
      <FormGenerator onSubmit={createPost} fields={fields} layout={layout} />
    </Card>
  );
};

NewPost.propTypes = {
  createPost: func.isRequired,
};

const mapDispatchToProps = {
  createPost: createPostsNotifier,
};

export default connect(null, mapDispatchToProps)(NewPost);
