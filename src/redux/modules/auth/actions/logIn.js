import { call, delay } from 'redux-saga/effects';
import { notification } from 'antd';
import notifyAction from '../../../helpers/notifyAction';
import requestSuccess from '../../../helpers/requestSuccess';
import { USER_ROLE } from '../../../../utils/auth/roles';
import requestFailure from '../../../helpers/requestFailure';

// CONSTANTS
export const LOG_IN_ACTION = 'LOG_IN_ACTION';
export const LOG_IN_SUCCESS = `${LOG_IN_ACTION}_SUCCESS`;
export const LOG_IN_FAILURE = `${LOG_IN_ACTION}FAILURE`;

/* LOG IN NOTIFIER */

const logInNotifier = (formValues) => {
  return notifyAction({
    type: LOG_IN_ACTION,
    data: formValues,
    loader: true,
  });
};

/* LOG IN ACTION */
// Mock login
function* logInAction({ data }) {
  yield delay(3000); // Simulate server delay

  if (data.username === 'test' && data.password === 'test') {
    yield call(requestSuccess, {
      type: LOG_IN_ACTION,
      data: { user: data, role: USER_ROLE, token: 'testToken' },
    });
  } else {
    notification.error({ description: 'Invalid username or password' });
    yield call(requestFailure, {
      type: LOG_IN_ACTION,
      data,
    });
  }
}

export { logInNotifier, logInAction };
