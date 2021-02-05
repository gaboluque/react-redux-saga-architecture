import React, { lazy, Suspense } from 'react';
import Loader from '../components/layout/Loader';

// Lazy import to help the bundler code-split out code
const ReduxContainer = lazy(() => import('./ReduxContainer'));

/**
 * This is the "main entry pont" for our react application
 * it will show a fallback loader while it's content
 * (Right now the redux container) is loaded.
 *
 */
const App = () => (
  <Suspense fallback={<Loader />}>
    <ReduxContainer />
  </Suspense>
);

export default App;
