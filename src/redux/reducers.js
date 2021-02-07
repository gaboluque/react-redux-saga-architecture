import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import postsReducer from './modules/posts/reducer';
import layoutReducer from './modules/layout/reducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    posts: postsReducer,
    layout: layoutReducer,
  });
