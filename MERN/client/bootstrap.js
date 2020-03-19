import {combineReducers}        from 'redux';
import ReducerRegistry          from './utils/ReducerRegistry';
import { connectRouter }        from 'connected-react-router';
import storeFactory             from './utils/StoreFactory';
import history                  from "./utils/history";

function bootstrapApp() {
  const reducerRegistry = new ReducerRegistry({
    router: connectRouter(history)
  });
  return Promise.all([storeFactory(combineReducers(reducerRegistry.getReducers()))])
  .then(response => {
    const store = response[0];
    window.store = store;
    reducerRegistry.setChangeListener(() => {
      store.replaceReducer(combineReducers(reducerRegistry.getReducers()));
    });
    return {store, reducerRegistry};
  }).catch(err => {
    throw new Error(err);
  });
}

export const bootstrap = bootstrapApp;