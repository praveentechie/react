import { Provider }             from 'react-redux';
import { ConnectedRouter }      from 'connected-react-router';
import { HashRouter }           from "react-router-dom";
import AppProvider              from "./AppProvider";
import history                  from "./utils/history";

export default ({store, children}) => {
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