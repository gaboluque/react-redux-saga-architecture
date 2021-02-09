import createAction from '../../../helpers/createAction';

// CONSTANTS
export const SHOW_LOADER_ACTION = 'SHOW_LOADER_ACTION';
export const HIDE_LOADER_ACTION = 'HIDE_LOADER_ACTION';

/* CHANGE LANGUAGE NOTIFIER */

const showLoaderAction = () => createAction(SHOW_LOADER_ACTION);
const hideLoaderAction = () => createAction(HIDE_LOADER_ACTION);

export { showLoaderAction, hideLoaderAction };
