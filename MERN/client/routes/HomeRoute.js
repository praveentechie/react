import { Route }          from 'react-router-dom';
import { lazy, Suspense } from 'react';

const LoadingMessage = () => (
  "I'm loading..."
);
export default (reducerRegistry) => {
  const HomeScreen = (lazy(() => {
    return import('../reducers/HomeReducer').then(({default: reducer}) => {
      reducerRegistry.register({
        homeReducer: reducer
      });
      return import('../screens/HomeScreen');
    });
  }));

  const WithSuspense = () => (
    <Suspense fallback={<LoadingMessage/>}>
      <HomeScreen/>
    </Suspense>
  );

  return (
    <Route path='/home'>
      <WithSuspense/>
    </Route>
  );
};