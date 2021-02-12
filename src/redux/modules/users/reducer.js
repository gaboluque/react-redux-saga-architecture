import { FETCH_USERS_SUCCESS } from './actions/fetchUsers';
import { SHOW_USER_ACTION } from './actions/showUser';
import { FETCH_USER_DETAILS_SUCCESS } from './actions/fetchUserDetails';

// TODO: Store design
export const INITIAL_STATE = {
  userList: [],
  userDetail: {},
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, userList: payload };
    case FETCH_USER_DETAILS_SUCCESS:
      return { ...state, userDetail: payload };
    case SHOW_USER_ACTION:
      return { ...state, userDetail: payload };
    default:
      return state;
  }
};
