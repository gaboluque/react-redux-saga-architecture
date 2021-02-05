import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import createAction from './createAction';

export default function* requestSuccess({
  type,
  data,
  redirect,
  callback,
  onSuccess,
}) {
  if (redirect) yield put(push(redirect));
  yield put(createAction(`${type}_SUCCESS`, data));
  if (callback) yield call(callback, data);
  if (onSuccess) yield call(onSuccess, data);
}
