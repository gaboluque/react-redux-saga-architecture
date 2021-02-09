import { Skeleton } from 'antd';
import React, { Suspense, useMemo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { string } from 'prop-types';
import { HOME_PATH } from '../routing/paths';
import routes from '../routing/routes';

/**
 * This is the main routes container. We add it inside the app's layout so that
 * it won't update each time we change routes.
 *
 */
const RoutesContainer = ({ role }) => {
  const roleRoutes = useMemo(
    () => routes.filter(({ roles }) => !roles.length || roles.includes(role)),
    [role]
  );

  return (
    <Suspense fallback={<Skeleton active />}>
      <Switch>
        {roleRoutes.map(({ path, Component, exact }) => (
          <Route key={path} path={path} component={Component} exact={exact} />
        ))}
        <Redirect to={HOME_PATH} />
      </Switch>
    </Suspense>
  );
};

RoutesContainer.propTypes = {
  role: string,
};

RoutesContainer.defaultProps = {
  role: '',
};

export default RoutesContainer;
