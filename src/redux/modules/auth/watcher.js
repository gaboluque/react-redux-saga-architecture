import { takeLatest } from 'redux-saga/effects';
import { LOG_IN_ACTION, logInAction } from './actions/logIn';

export default [takeLatest(LOG_IN_ACTION, logInAction)];
