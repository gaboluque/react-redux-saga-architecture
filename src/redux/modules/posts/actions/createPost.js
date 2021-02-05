import { call, put } from 'redux-saga/effects';
import { notification } from 'antd';
import notifyAction from '../../../helpers/notifyAction';
import request from '../../../helpers/request';
import createPosts from '../../../../services/testAPI/createPostService';
import { POSTS_PATH } from '../../../../routing/paths';
import { fetchPostsNotifier } from './fetchPosts';

// CONSTANTS

export const CREATE_POST_ACTION = 'CREATE_POST_ACTION';
export const CREATE_POST_SUCCESS = `${CREATE_POST_ACTION}_SUCCESS`;
export const CREATE_POST_FAILURE = `${CREATE_POST_ACTION}_FAILURE`;

/* LOG IN NOTIFIER */
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

/* LOG IN ACTION */

function* createPostSuccess() {
  yield put(fetchPostsNotifier());
  notification.success({ description: 'Post created correctly!' });
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
