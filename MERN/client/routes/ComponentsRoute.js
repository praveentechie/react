import { Route }  from 'react-router-dom';
import UserReducer from '../reducers/UserReducer';
import { lazy, Suspense } from 'react';

const LoadingMessage = () => (
  "I'm loading..."
);

export default (reducerRegistry) => {
  const ComponentScreen = (lazy(() => import('../screens/ComponentScreen')));
  const TableComponent = (lazy(() => import('../components/Table')));
  const LoaderComponent = (lazy(() => import('../components/PageLoaders')));
  const Button = (lazy(() => import('../components/Button')));
  const InputField = (lazy(() => import('../components/InputField')));
  const ScrollToContent = (lazy(() => import('../reusable/ScrollToContent')));

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
            <Button title="Component"/>
          </Route>
          <Route path="/components/input-field">
            <InputField/>
          </Route>
          <Route path="/components/scroll-to">
            <ScrollToContent/>
          </Route>
        </div>
      </ComponentScreen>
    </Suspense>
  );
  reducerRegistry.register({
    userReducer: UserReducer
  });
  return (
    <Route path='/components'>
      <WithSuspense/>
    </Route>
  );
};
