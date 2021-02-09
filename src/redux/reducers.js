import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import postsReducer from './modules/posts/reducer';
import layoutReducer from './modules/layout/reducer';
import authReducer from './modules/auth/reducer';

export default (history) =>
  combineReducers({
    auth: authReducer,
    layout: layoutReducer,
    posts: postsReducer,
    router: connectRouter(history),
  });
