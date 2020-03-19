import React                    from 'react';
window.React = React;
import ReactDOM                 from 'react-dom';
import {Provider}               from 'react-redux';
import {
  HashRouter,
  Route,
  Switch
}                               from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router' 
import App                      from './components/App';
import RouteNotFound            from './components/RouteNotFound';
import { UserProvider, useUser } from "./_core/context/user-context";
import { bootstrap } from "./bootstrap";

import history from "./utils/history";
import HomeRoute from './routes/HomeRoute';
import ComponentRoute from './routes/ComponentsRoute';
import LoginRoute from "./login/login.route";
import './scss/_core.scss';

const render = ({store, reducerRegistry}) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HashRouter>
          <UserProvider>
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
          </UserProvider>
        </HashRouter>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('mount')
  );
};

bootstrap().then(render);