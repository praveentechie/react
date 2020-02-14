import {
  createStore,
  applyMiddleware,
  compose
}                   from 'redux';
import thunk        from 'redux-thunk';

export default (reducer)=>{
  return new Promise((resolve, reject)=>{

    if(process.env.NODE_ENV === 'development'&&false){
      require.ensure([], (require) => {

        let middleWare = [thunk];

        let createStoreWithMiddleware = compose(
            applyMiddleware(...middleWare)
          )(createStore);

        let store = createStoreWithMiddleware(reducer);
        resolve(store);

      });
    }else{
      let middleWare = [thunk];
      let createStoreWithMiddleware = compose(
          applyMiddleware(...middleWare)
        )(createStore);

      let store = createStoreWithMiddleware(reducer);
      resolve(store);
    }
  });
};
