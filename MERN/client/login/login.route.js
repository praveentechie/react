import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';

const LoginRoute = () => {
  return (
    <Route path="/login">
      <LoginPage />
    </Route>
  );
};

LoginRoute.displayName = 'LoginRoute';
export default LoginRoute;