import { Skeleton } from 'antd';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROOT_PATH } from '../routing/paths';
import routes from '../routing/routes';

/**
 * This is the main routes container. We add it inside the app's layout so that
 * it won't update each time we change routes.
 *
 */
const RoutesContainer = () => {
  return (
    <Suspense fallback={<Skeleton active />}>
      <Switch>
        {routes.map(({ path, Component, exact }) => (
          <Route key={path} path={path} component={Component} exact={exact} />
        ))}
        <Redirect to={ROOT_PATH} />
      </Switch>
    </Suspense>
  );
};

RoutesContainer.propTypes = {};

RoutesContainer.defaultProps = {};

export default RoutesContainer;
