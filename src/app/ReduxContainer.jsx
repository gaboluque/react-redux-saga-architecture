import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from '../components/layout/Loader';
import configureStore from '../redux/configureStore';

const { store, persistor } = configureStore();
const RouterContainer = lazy(() => import('./RouterContainer'));

/**
 * This is the main redux component, here we can add any providers and
 * necessary wrappers.
 *
 * Right now we've added the actual redux provider and a
 * PersistGate to persist our store on page reload
 *
 */
export default () => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <Suspense fallback={<Loader />}>
        <RouterContainer />
      </Suspense>
    </PersistGate>
  </Provider>
);
