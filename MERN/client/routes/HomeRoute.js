import { Route, Switch }  from 'react-router-dom';
import { lazy, Suspense } from 'react';
import reducer from '../reducers/HomeReducer';

const LoadingMessage = () => (
  "I'm loading..."
)
export default (reducerRegistry) => {
  const HomeScreen = (lazy(() => import('../screens/HomeScreen')));
  const WithSuspense = () => (
    <Suspense fallback={<LoadingMessage/>}>
      <HomeScreen/>
    </Suspense>
  );
  reducerRegistry.register({
    homeReducer: reducer
  });
  return (
    <Route path='/home'>
      <WithSuspense/>
    </Route>
  );
};