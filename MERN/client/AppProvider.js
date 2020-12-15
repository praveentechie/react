import React from 'react';
import { UserProvider } from './_core/context/user-context';

const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
};

AppProvider.displayName = 'AppProvider';
export default AppProvider;