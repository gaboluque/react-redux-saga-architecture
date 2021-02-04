import { LOG_IN_SUCCESS } from './actions/logIn';

export const INITIAL_STATE = {
  token: null,
  role: 'public',
  verified: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOG_IN_SUCCESS:
      return { ...state, ...{ ...payload, verified: true } };
    default:
      return state;
  }
};
