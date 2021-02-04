import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import authReducer from './modules/auth/reducer';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  });
