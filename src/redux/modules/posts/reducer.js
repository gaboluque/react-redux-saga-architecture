import { FETCH_POSTS_SUCCESS } from './actions/fetchPosts';

// TODO: Store design
export const INITIAL_STATE = {
  posts: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};
