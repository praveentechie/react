import { Route, IndexRoute, Switch }  from 'react-router-dom';
import UserReducer from '../reducers/UserReducer';
import { lazy, Suspense } from 'react';

// export default (reducerRegistry) => {
//   const appRoute = {
//     renderComponents: (location, cb) => {
//       require(['../screens/ComponentScreen', '../reducers/UserReducer'], (component, reducer)=> {
//         reducerRegistry.register({
//           userReducer: reducer
//         });
//         cb(null, component);
//       });
//     },
//     renderLoader: (location, cb) => {
//       require(['../components/PageLoaders'], (component)=> {
//         cb(null, component);
//       });
//     },
//     renderTable: (location, cb) => {
//       require(['../components/Table'], (component)=> {
//         cb(null, component);
//       });
//     },
//     renderButton: (location, cb) => {
//       require(['../components/Button'], (component)=> {
//         cb(null, component);
//       });
//     },
//     renderInputField: (location, cb) => {
//       require(['../components/InputField'], (component)=> {
//         cb(null, component);
//       });
//     },
//     renderAtv: (location, cb) => {
//       require(['../components/AtvImage'], (component) => {
//         cb(null, component);
//       });
//     }
//   };

//   return(
//     <Route path='components' component={appRoute.renderComponents}>
//       <Route path='table' component={appRoute.renderTable} />
//       <Route path='loader' component={appRoute.renderLoader} />
//       <Route path='button' component={appRoute.renderButton} />
//       <Route path='input-field' component={appRoute.renderInputField} />
//       <Route path='atv-image' component={appRoute.renderAtv} />
//     </Route>
//   );

// };

const LoadingMessage = () => (
  "I'm loading..."
)
export default (reducerRegistry) => {
  const ComponentScreen = (lazy(() => import('../screens/ComponentScreen')));
  const TableComponent = (lazy(() => import('../components/Table')));
  const LoaderComponent = (lazy(() => import('../components/PageLoaders')));
  const Button = (lazy(() => import('../components/Button')));
  const InputField = (lazy(() => import('../components/InputField')));

  const WithSuspense = () => (
    <Suspense fallback={<LoadingMessage/>}>
      <ComponentScreen>
        <div>
          <Route path="/components/table">
            <TableComponent/>
          </Route>
          <Route path="/components/loader">
            <LoaderComponent/>
          </Route>
          <Route path="/components/button">
            <Button/>
          </Route>
          <Route path="/components/input-field">
            <InputField/>
          </Route>
        </div>
      </ComponentScreen>
    </Suspense>
  );
  reducerRegistry.register({
    userReducer: UserReducer
  });
  return (
    <>
    <Route path='/components'>
      <WithSuspense/>
    </Route>

    </>
  );
};
