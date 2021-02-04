import { all } from 'redux-saga/effects';
import authWatcher from './modules/auth/watcher';
import postsWatcher from './modules/posts/watcher';

export default function* rootSaga() {
  yield all([...authWatcher, ...postsWatcher]);
}
