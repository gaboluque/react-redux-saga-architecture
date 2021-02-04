import { call } from 'redux-saga/effects';
import testApi from '../../../../apis/testApi';
import notifyAction from '../../../helpers/notifyAction';
import request from '../../../helpers/request';

// CONSTANTS

export const LOG_IN_ACTION = 'auth/LOG_IN_ACTION';
export const LOG_IN_SUCCESS = `${LOG_IN_ACTION}_SUCCESS`;
export const LOG_IN_FAILURE = `${LOG_IN_ACTION}_FAILURE`;

/* LOG IN NOTIFIER */
const formatter = (formValues) => {
  return {
    ...formValues,
    role: 'ADMIN',
  };
};

const logInNotifier = (formValues) => {
  return notifyAction({
    type: LOG_IN_ACTION,
    loader: true,
    data: formatter(formValues),
  });
};

/* LOG IN ACTION */
function* logInAction({ data }) {
  yield call(request, {
    type: LOG_IN_ACTION,
    api: testApi,
    method: 'post',
    endpoint: `/log-in`,
    params: data,
  });
}

export { logInAction, logInNotifier };
