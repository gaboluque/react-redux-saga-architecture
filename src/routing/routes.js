import { lazy } from 'react';
import Home from '../pages/Home';
import * as paths from './paths';
import PostsList from '../pages/Posts/PostsList';
import { USER_ROLE } from '../utils/auth/roles';
import UsersIndex from '../pages/Users/UsersIndex';
import UserDetail from '../pages/Users/UserDetail';

const Form = lazy(() => import('../pages/Posts/NewPost'));

const routes = [
  {
    title: 'Home',
    path: paths.HOME_PATH,
    Component: Home,
    exact: true,
    roles: [],
  },
  {
    title: 'Posts',
    path: paths.POSTS_PATH,
    Component: PostsList,
    exact: true,
    roles: [USER_ROLE],
  },
  {
    title: 'New Post',
    path: paths.NEW_POST_PATH,
    Component: Form,
    exact: true,
    roles: [USER_ROLE],
  },
  {
    title: 'Users',
    path: paths.USERS_PATH,
    Component: UsersIndex,
    exact: true,
    roles: [USER_ROLE],
  },
  {
    title: 'User detail',
    path: paths.USER_DETAIL_PATH(':userId'),
    Component: UserDetail,
    exact: true,
    roles: [USER_ROLE],
  },
];

export default routes;
