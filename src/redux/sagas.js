import { all } from 'redux-saga/effects';
import postsWatcher from './modules/posts/watcher';

export default function* rootSaga() {
  yield all([...postsWatcher]);
}
