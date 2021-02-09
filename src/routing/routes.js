import { lazy } from 'react';
import Home from '../pages/Home';
import * as paths from './paths';
import PostsList from '../pages/Posts/PostsList';
import { USER_ROLE } from '../utils/auth/roles';

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
    title: 'New',
    path: paths.NEW_POST_PATH,
    Component: Form,
    exact: true,
    roles: [USER_ROLE],
  },
];

export default routes;
