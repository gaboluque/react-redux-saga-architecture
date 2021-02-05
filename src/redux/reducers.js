import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import postsReducer from './modules/posts/reducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    posts: postsReducer,
  });
