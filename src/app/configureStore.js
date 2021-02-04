import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import reducers from '../redux/reducers';
import sagas from '../redux/sagas';

import history from '../routing/history';

const persistConfig = {
  key: 'authType',
  storage,
  whitelist: ['cart', 'form', 'layout'],
};
const pReducer = persistReducer(persistConfig, reducers(history));

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
      typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    pReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
  );

  const persistor = persistStore(store);

  sagaMiddleware.run(sagas);
  return { persistor, store };
};
