import { CHANGE_LANGUAGE_ACTION } from './actions/changeLanguage';

export const INITIAL_STATE = {
  language: navigator.language || 'en',
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_LANGUAGE_ACTION:
      return { ...state, language: payload };
    default:
      return state;
  }
};
