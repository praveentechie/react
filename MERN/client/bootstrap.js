import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import storeFactory from './_core/utils/store-factory';
import ReducerRegistry from './_core/utils/reducer-registry';
import history from './_core/utils/mern-history';

import './_core/styles/_core.scss';

function bootstrapApp() {
  const reducerRegistry = new ReducerRegistry({
    router: connectRouter(history)
  });

  return Promise.all([storeFactory(combineReducers(reducerRegistry.getReducers()))])
    .then((response) => {
      const store = response[0];
      if (process.env.NODE_ENV === 'development') {
        window.store = store;
      }
      reducerRegistry.setChangeListener(() => {
        store.replaceReducer(combineReducers(reducerRegistry.getReducers()));
      });
      return { store, reducerRegistry };
    }).catch((err) => {
      throw new Error(err);
    });
}

export default bootstrapApp;
