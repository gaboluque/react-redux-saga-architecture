import { put, take, takeLatest } from 'redux-saga/effects';
import { hideLoaderAction, showLoaderAction } from './actions/loaderActions';

const isLoaderNotifier = ({ notifier, loader }) => notifier && loader;

function* loaderListener({ type: actionName }) {
  yield put(showLoaderAction());

  // Wait until an action is dispatched with the same type
  yield take(({ type, action }) => action && type.includes(actionName));
  yield put(hideLoaderAction());
}

export default [takeLatest(isLoaderNotifier, loaderListener)];
