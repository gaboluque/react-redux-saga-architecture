import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrayOf, func } from 'prop-types';
import { Button, Card, List } from 'antd';
import { push } from 'react-router-redux';
import { fetchPostsNotifier } from '../../../redux/modules/posts/actions/fetchPosts';
import { postType } from '../../../utils/types/postsTypes';
import { NEW_POST_PATH } from '../../../routing/paths';
import PostListItem from './components/PostListItem';

const PostsList = ({ fetchPosts, posts, newPost }) => {
  useEffect(() => {
    if (!posts.length) fetchPosts();
  }, []);

  return (
    <Card
      className="posts-list"
      title="Posts list"
      extra={<Button onClick={newPost}>Add Post</Button>}
    >
      <List loading={!posts.length}>
        {posts.map((post) => {
          return (
            <List.Item key={post.id}>
              <PostListItem post={post} />
            </List.Item>
          );
        })}
      </List>
    </Card>
  );
};

PostsList.propTypes = {
  fetchPosts: func.isRequired,
  newPost: func.isRequired,
  posts: arrayOf(postType).isRequired,
};

PostsList.defaultProps = {};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = {
  fetchPosts: fetchPostsNotifier,
  newPost: () => push(NEW_POST_PATH),
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
