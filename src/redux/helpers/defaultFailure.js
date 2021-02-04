import { put } from 'redux-saga/effects';
import createAction from './createAction';

export default function* defaultFailure(type, data, status) {
  switch (status) {
    case 403:
      // TODO: Define what to do on 403
      break;
    case 401:
      // TODO: Define what to do on 401
      break;
    case 408:
      // TODO: Define what to do on 401
      break;
    default:
      break;
  }
  yield put(createAction(`${type}_FAILURE`, data));
}
