import { call } from 'redux-saga/effects';
import notifyAction from '../../../helpers/notifyAction';
import request from '../../../helpers/request';
import fetchPosts from '../../../../services/api/dummyAPI/fetchPostsService';

// CONSTANTS

export const FETCH_POSTS_ACTION = 'FETCH_POSTS_ACTION';
export const FETCH_POSTS_SUCCESS = `${FETCH_POSTS_ACTION}_SUCCESS`;
export const FETCH_POSTS_FAILURE = `${FETCH_POSTS_ACTION}_FAILURE`;

const fetchPostsNotifier = () => {
  return notifyAction({
    type: FETCH_POSTS_ACTION,
    loader: true,
  });
};

/* LOG IN ACTION */
function* fetchPostsAction() {
  yield call(request, {
    type: FETCH_POSTS_ACTION,
    service: fetchPosts,
    cancelId: 'fetch_posts',
  });
}

export { fetchPostsAction, fetchPostsNotifier };
