import { CHANGE_LANGUAGE_ACTION } from './actions/changeLanguage';
import {
  HIDE_LOADER_ACTION,
  SHOW_LOADER_ACTION,
} from './actions/loaderActions';

export const INITIAL_STATE = {
  language: navigator.language || 'en',
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHANGE_LANGUAGE_ACTION:
      return { ...state, language: payload };
    case SHOW_LOADER_ACTION:
      return { ...state, loading: true };
    case HIDE_LOADER_ACTION:
      return { ...state, loading: false };
    default:
      return state;
  }
};
