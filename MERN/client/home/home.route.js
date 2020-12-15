import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

const LoadingMessage = () => {
  return (
    "I'm loading..."
  );
};

const HomeRoute = (reducerRegistry) => {
  const HomeScreen = (lazy(() => {
    return import('./home.reducer').then(({ default: reducer }) => {
      reducerRegistry.register({
        homeReducer: reducer
      });
      return import('./HomeScreen');
    });
  }));

  const WithSuspense = () => {
    return (
      <Suspense fallback={<LoadingMessage />}>
        <HomeScreen />
      </Suspense>
    );
  };

  return (
    <Route path="/home">
      <WithSuspense />
    </Route>
  );
};

HomeRoute.displayName = 'HomeRoute';
export default HomeRoute;