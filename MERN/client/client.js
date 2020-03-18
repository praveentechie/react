import React                    from 'react';
window.React = React;
import ReactDOM                 from 'react-dom';
import {combineReducers}        from 'redux';
import {Provider}               from 'react-redux';
import {
  HashRouter,
  Route,
  Switch
}                               from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router' 
import ReducerRegistry          from './utils/ReducerRegistry';
import storeFactory             from './utils/StoreFactory';
import App                      from './components/App';
import RouteNotFound            from './components/RouteNotFound';
import { connectRouter } from 'connected-react-router';

import history from "./utils/history";
import HomeRoute from './routes/HomeRoute';
import ComponentRoute from './routes/ComponentsRoute';
import LoginRoute from "./login/login.route";
import './scss/_core.scss';

const reducerRegistry = new ReducerRegistry({
  router: connectRouter(history)
});
Promise.all([storeFactory(combineReducers(reducerRegistry.getReducers()))])
  .then(resolves=>{
    let store = resolves[0];
    window.store = store;
    reducerRegistry.setChangeListener(() => {
      store.replaceReducer(combineReducers(reducerRegistry.getReducers()));
    });
    render(store);
  })
  .catch(error=>{
    throw error;
  });

const render = (store) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HashRouter>
          <div>
            <Switch>
              <Route exact component={App}/>
              {LoginRoute(reducerRegistry)}
            </Switch>
            <Switch>
              {HomeRoute(reducerRegistry)}
              {ComponentRoute(reducerRegistry)}
            </Switch>
            {/* <Route>
              <RouteNotFound/>
            </Route> */}
          </div>
        </HashRouter>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('mount')
  );
};
