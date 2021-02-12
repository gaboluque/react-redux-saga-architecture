import { all } from 'redux-saga/effects';
import postsWatcher from './modules/posts/watcher';
import authWatcher from './modules/auth/watcher';
import layoutWatcher from './modules/layout/watcher';
import usersWatcher from './modules/users/watcher';

export default function* rootSaga() {
  yield all([
    ...postsWatcher,
    ...authWatcher,
    ...layoutWatcher,
    ...usersWatcher,
  ]);
}
