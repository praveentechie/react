import {
  Route,
  Switch,
  Redirect
}                           from 'react-router-dom';
import { useUser }          from "./_core/context/user-context";
import RouteNotFound        from './components/RouteNotFound';
import HomeRoute            from './routes/HomeRoute';
import ComponentRoute       from './routes/ComponentsRoute';
import LoginRoute           from "./login/login.route";
import App                  from './components/App';

export default ({reducerRegistry}) => {
  const userContext = useUser();
  return (
    <>
    {
      (userContext || {}).user ? 
        <>
          <Route exact component={App}/>
          <Route path="/login">
            <Redirect to="/home"/>
          </Route>
          <Switch>
            {HomeRoute(reducerRegistry)}
            {ComponentRoute(reducerRegistry)}
            <Route component={RouteNotFound}/>
          </Switch>  
        </>
      :
        <>
          {LoginRoute(reducerRegistry)}
          <Route>
            <Redirect to='/login'/>
          </Route>
        </>
    }
    </>
  );
};