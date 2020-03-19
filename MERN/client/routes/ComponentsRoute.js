import { Route }  from 'react-router-dom';
import UserReducer from '../reducers/UserReducer';
import { lazy, Suspense } from 'react';
import { UserProvider } from "../_core/context/user-context";

const LoadingMessage = () => (
  "I'm loading..."
);

export default (reducerRegistry) => {
  const ComponentScreen = (lazy(() => import('../screens/ComponentScreen')));
  const TableComponent = (lazy(() => import('../components/Table')));
  const LoaderComponent = (lazy(() => import('../components/PageLoaders')));
  const Button = (lazy(() => import('../components/Button')));
  const InputFieldComponents = (lazy(() => import('../components/InputFieldComponents')));
  const ScrollToContent = (lazy(() => import('../reusable/ScrollToContent')));
  const ScrollToContentHook = (lazy(() => import('../reusable/ScrollToContentHook')));
  const ErrorBoundary = (lazy(() => import('../reusable/ErrorBoundary')));
  const TriggerError = (lazy(() => import('../reusable/TriggerError')));

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
            <InputFieldComponents/>
          </Route>
          <Route path="/components/scroll-to">
            <ScrollToContent/>
          </Route>
          <Route path="/components/scroll-to-hook">
            <ScrollToContentHook/>
          </Route>
          <Route path="/components/error-boundary">
            <ErrorBoundary>
              <TriggerError/>
            </ErrorBoundary>
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
