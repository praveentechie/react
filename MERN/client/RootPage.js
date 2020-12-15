import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { HashRouter } from 'react-router-dom';
import AppProvider from './AppProvider';
import history from './_core/utils/mern-history';

const RootPage = ({ store, children }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HashRouter>
          <AppProvider>
            {children}
          </AppProvider>
        </HashRouter>
      </ConnectedRouter>
    </Provider>
  );
};

RootPage.displayName = 'RootPage';
export default RootPage;