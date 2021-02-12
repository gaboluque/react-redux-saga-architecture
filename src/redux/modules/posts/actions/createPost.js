import { call, put } from 'redux-saga/effects';
import { notification } from 'antd';
import notifyAction from '../../../helpers/notifyAction';
import request from '../../../helpers/request';
import createPosts from '../../../../services/api/dummyAPI/posts/createPostService';
import { POSTS_PATH } from '../../../../routing/paths';
import { fetchPostsNotifier } from './fetchPosts';

export const CREATE_POST_ACTION = 'CREATE_POST_ACTION';
export const CREATE_POST_SUCCESS = `${CREATE_POST_ACTION}_SUCCESS`;
export const CREATE_POST_FAILURE = `${CREATE_POST_ACTION}_FAILURE`;

const formatter = (formValues) => {
  return {
    ...formValues,
    userId: 10,
  };
};

const createPostsNotifier = (formValues) => {
  return notifyAction({
    type: CREATE_POST_ACTION,
    loader: true,
    data: formatter(formValues),
  });
};

function* createPostSuccess() {
  yield put(fetchPostsNotifier());
  notification.success({ message: 'Post created correctly!' });
}

function* createPostsAction({ data }) {
  yield call(request, {
    type: CREATE_POST_ACTION,
    service: createPosts,
    params: data,
    redirect: POSTS_PATH,
    onSuccess: createPostSuccess,
  });
}

export { createPostsAction, createPostsNotifier };
