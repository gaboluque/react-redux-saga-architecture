import React from 'react';
import { Card } from 'antd';
import { postType } from '../../../../../utils/types/postsTypes';

const PostListItem = ({ post }) => {
  return <Card title={post.title}>{post.body}</Card>;
};

PostListItem.propTypes = {
  post: postType.isRequired,
};

PostListItem.defaultProps = {};

export default PostListItem;
