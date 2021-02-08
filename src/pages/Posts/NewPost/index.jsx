import { func } from 'prop-types';
import React from 'react';
import { Card } from 'antd';
import { connect } from 'react-redux';
import { createPostsNotifier } from '../../../redux/modules/posts/actions/createPost';
import './newPost.scss';
import NewPostForm from './components/NewPostForm';

const NewPost = ({ createPost }) => {
  return (
    <Card className="sample-form-container" title="Post form">
      <NewPostForm submitPost={createPost} />
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
