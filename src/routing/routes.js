import { lazy } from 'react';
import Root from '../pages/Root';
import * as paths from './paths';
import PostsList from '../pages/Posts/PostsList';

const Form = lazy(() => import('../pages/Posts/NewPost'));

const routes = [
  {
    title: 'Home',
    path: paths.ROOT_PATH,
    Component: Root,
    exact: true,
    roles: [],
  },
  {
    title: 'Posts',
    path: paths.POSTS_PATH,
    Component: PostsList,
    exact: true,
    roles: [],
  },
  {
    title: 'New',
    path: paths.NEW_POST_PATH,
    Component: Form,
    exact: true,
    roles: [],
  },
];

export default routes;
