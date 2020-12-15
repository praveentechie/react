import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from './mern-history';

export default (reducer) => {
  return new Promise((resolve, reject) => {
    try {
      if (process.env.NODE_ENV === 'development' && process.env.dummy) {
        require.ensure([], () => {
          const middleWare = [thunk];

          const createStoreWithMiddleware = compose(
            applyMiddleware(...middleWare)
          )(createStore);

          const store = createStoreWithMiddleware(reducer);
          resolve(store);
        });
      } else {
        const middleWare = [thunk, routerMiddleware(history)];
        const store = createStore(
          connectRouter(history)(reducer),
          applyMiddleware(...middleWare)
        );
        resolve(store);
      }
    } catch (exception) {
      reject(exception);
    }
  });
};
