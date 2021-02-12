import { put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import notifyAction from '../../../helpers/notifyAction';
import { USER_DETAIL_PATH } from '../../../../routing/paths';

export const SHOW_USER_ACTION = 'SHOW_USER_ACTION';

// We add the data we already have to the reducer, which will be completed
// afterwards by an API call
const showUserNotifier = (userData) => {
  return notifyAction({
    type: SHOW_USER_ACTION,
    payload: userData,
  });
};

// Then we change our location to the detail page
function* showUserAction({ payload: { id } }) {
  yield put(push(USER_DETAIL_PATH(id)));
}

export { showUserNotifier, showUserAction };
