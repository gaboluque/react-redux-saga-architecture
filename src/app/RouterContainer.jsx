import { ConnectedRouter } from 'connected-react-router';
import React, { lazy, Suspense } from 'react';
import { Router } from 'react-router-dom';
import Loader from '../components/layout/Loader';

import history from '../routing/history';

const AppContainer = lazy(() => import('./AppContainer'));

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

export default () => (
  <ConnectedRouter history={history}>
    <Router onUpdate={hashLinkScroll} history={history}>
      <Suspense fallback={<Loader />}>
        <AppContainer />
      </Suspense>
    </Router>
  </ConnectedRouter>
);
