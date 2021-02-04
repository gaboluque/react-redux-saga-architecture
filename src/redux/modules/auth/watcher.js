import { takeLatest } from 'redux-saga/effects';
import { logInAction, LOG_IN_ACTION } from './actions/logIn';

export default [takeLatest(LOG_IN_ACTION, logInAction)];
