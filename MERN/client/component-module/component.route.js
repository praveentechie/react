import React from 'react';
import { Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { routes } from './component.constants';

const LoadingMessage = () => {
  return (
    "I'm loading..."
  );
};

export default (reducerRegistry) => {
  const ComponentScreen = (lazy(() => {
    return import('./component.reducer').then(({ default: userReducer }) => {
      reducerRegistry.register({
        userReducer
      });
      return import('./ComponentScreen');
    });
  }));
  const TableComponent = (lazy(() => { return import('./components/table/Table'); }));
  const LoaderComponent = (lazy(() => { return import('./components/PageLoaders'); }));
  const Button = (lazy(() => { return import('./components/button/Button'); }));
  const InputFieldComponents = (lazy(() => { return import('./components/InputFieldComponents'); }));
  const ScrollToContent = (lazy(() => { return import('./components/scroll-to/ScrollToContent'); }));
  const ScrollToContentHook = (lazy(() => { return import('./components/scroll-to/ScrollToContentHook'); }));
  const ErrorBoundary = (lazy(() => { return import('./components/error-boundary/ErrorBoundary'); }));
  const TriggerError = (lazy(() => { return import('./components/error-boundary/TriggerError'); }));

  const componentList = [
    {
      path: routes.TABLE,
      Component: TableComponent
    }, {
      path: routes.LOADER,
      Component: LoaderComponent
    }, {
      path: routes.BUTTON,
      Component: Button
    }, {
      path: routes.INPUT_FIELD,
      Component: InputFieldComponents
    }, {
      path: routes.SCROLL_TO,
      Component: ScrollToContent
    }, {
      path: routes.SCROLL_TO_HOOK,
      Component: ScrollToContentHook
    }, {
      path: routes.ERROR_BOUNDARY,
      Component: ErrorBoundary,
      ChildComponent: TriggerError
    }
  ];

  const WithSuspense = () => {
    return (
      <Suspense fallback={<LoadingMessage />}>
        <ComponentScreen>
          <div>
            {
              componentList.map(({ path, Component, ChildComponent }) => {
                return (
                  <Suspense key={path} fallback={<LoadingMessage />}>
                    <Route path={path}>
                      <Component>{ChildComponent && <ChildComponent />}</Component>
                    </Route>
                  </Suspense>
                );
              })
            }
          </div>
        </ComponentScreen>
      </Suspense>
    );
  };

  return (
    <Route path="/components">
      <WithSuspense />
    </Route>
  );
};
