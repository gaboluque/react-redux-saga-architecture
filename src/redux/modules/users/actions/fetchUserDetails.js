import { call } from 'redux-saga/effects';
import notifyAction from '../../../helpers/notifyAction';
import request from '../../../helpers/request';
import fetchUserDetailsService from '../../../../services/api/dummyAPI/users/fetchUserDetailsService';

export const FETCH_USER_DETAILS_ACTION = 'FETCH_USER_DETAILS_ACTION';
export const FETCH_USER_DETAILS_SUCCESS = `${FETCH_USER_DETAILS_ACTION}_SUCCESS`;
export const FETCH_USER_DETAILS_FAILURE = `${FETCH_USER_DETAILS_ACTION}_FAILURE`;

const fetchUserDetailsNotifier = (id) => {
  return notifyAction({
    type: FETCH_USER_DETAILS_ACTION,
    data: id,
  });
};

function* fetchUserDetailsAction({ data }) {
  yield call(request, {
    type: FETCH_USER_DETAILS_ACTION,
    service: fetchUserDetailsService(data),
    cancelId: `fetch_user_detail_${data}`,
  });
}

export { fetchUserDetailsAction, fetchUserDetailsNotifier };
