import { lazy } from 'react';
import Root from '../pages/Root';
import * as paths from './paths';

const LogIn = lazy(() => import('../pages/LogIn'));

const routes = [
  {
    path: paths.ROOT_PATH,
    Component: Root,
    exact: true,
    roles: [],
  },
  {
    path: paths.LOG_IN_PATH,
    Component: LogIn,
    exact: true,
    roles: [],
  },
];

export default routes;
