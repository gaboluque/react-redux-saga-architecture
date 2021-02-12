import { takeLatest } from 'redux-saga/effects';
import { fetchUsersAction, FETCH_USERS_ACTION } from './actions/fetchUsers';
import { SHOW_USER_ACTION, showUserAction } from './actions/showUser';
import {
  FETCH_USER_DETAILS_ACTION,
  fetchUserDetailsAction,
} from './actions/fetchUserDetails';

export default [
  takeLatest(FETCH_USERS_ACTION, fetchUsersAction),
  takeLatest(SHOW_USER_ACTION, showUserAction),
  takeLatest(FETCH_USER_DETAILS_ACTION, fetchUserDetailsAction),
];
