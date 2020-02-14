import { Route, IndexRoute }  from 'react-router';


export default (reducerRegistry) => {
  const appRoute = {
    renderHome: (location, cb) => {
      require(['../screens/HomeScreen', '../reducers/HomeReducer'], (component, reducer)=> {
        reducerRegistry.register({
          homeReducer: reducer
        });
        cb(null, component);
      });
    }
  };

  return(
    <Route path='/home' getComponent={appRoute.renderHome} />
  );

};
