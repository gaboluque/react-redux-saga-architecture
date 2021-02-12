const HOME_PATH = '/';

const POSTS_PATH = '/posts';
const NEW_POST_PATH = `${POSTS_PATH}/new`;

const USERS_PATH = '/users';
const USER_DETAIL_PATH = (id) => `${USERS_PATH}/${id}`;

export { HOME_PATH, POSTS_PATH, NEW_POST_PATH, USERS_PATH, USER_DETAIL_PATH };
