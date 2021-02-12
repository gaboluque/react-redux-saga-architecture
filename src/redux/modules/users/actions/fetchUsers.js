import { call } from 'redux-saga/effects';
import notifyAction from '../../../helpers/notifyAction';
import request from '../../../helpers/request';
import fetchUsers from '../../../../services/api/dummyAPI/users/fetchUsersService';

export const FETCH_USERS_ACTION = 'FETCH_USERS_ACTION';
export const FETCH_USERS_SUCCESS = `${FETCH_USERS_ACTION}_SUCCESS`;
export const FETCH_USERS_FAILURE = `${FETCH_USERS_ACTION}_FAILURE`;

const fetchUsersNotifier = () => {
  return notifyAction({
    type: FETCH_USERS_ACTION,
    loader: true,
  });
};

function* fetchUsersAction() {
  yield call(request, {
    type: FETCH_USERS_ACTION,
    service: fetchUsers,
    cancelId: 'fetch_users',
  });
}

export { fetchUsersAction, fetchUsersNotifier };
