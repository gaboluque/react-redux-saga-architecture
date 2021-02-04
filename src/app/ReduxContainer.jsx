import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from '../components/layout/Loader';
import configureStore from './configureStore';

const { store, persistor } = configureStore();
const RouterContainer = lazy(() => import('./RouterContainer'));

export default () => (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <Suspense fallback={<Loader />}>
        <RouterContainer />
      </Suspense>
    </PersistGate>
  </Provider>
);
