import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import createAction from './createAction';

export default function* defaultSuccess(type, data, path = null, callback) {
  if (path) yield put(push(path));
  yield put(createAction(`${type}_SUCCESS`, data));
  if (callback) yield call(callback, data);
}
