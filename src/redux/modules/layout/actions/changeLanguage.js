import createAction from '../../../helpers/createAction';

// CONSTANTS
export const CHANGE_LANGUAGE_ACTION = 'CHANGE_LANGUAGE_ACTION';

/* CHANGE LANGUAGE NOTIFIER */

const changeLanguageNotifier = (language) => {
  return createAction(CHANGE_LANGUAGE_ACTION, language);
};

export { changeLanguageNotifier };
