import { Skeleton } from 'antd';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROOT_PATH } from '../routing/paths';
import routes from '../routing/routes';

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
