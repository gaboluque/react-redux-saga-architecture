import { takeLatest } from 'redux-saga/effects';
import { fetchPostsAction, FETCH_POSTS_ACTION } from './actions/fetchPosts';
import { CREATE_POST_ACTION, createPostsAction } from './actions/createPost';

export default [
  takeLatest(FETCH_POSTS_ACTION, fetchPostsAction),
  takeLatest(CREATE_POST_ACTION, createPostsAction),
];
