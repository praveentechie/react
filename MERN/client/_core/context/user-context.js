import React, { useState } from 'react';
import localStorageService from 'services/local-storage';
import { storages } from '../core-constants';

/** ### react context and localStorage
 * ### JS: localStorage read and write data from/to local storage
 */
console.log('saved Data', localStorageService.getValue(storages.USER_INFO));
const userDetails = JSON.parse(localStorageService.getValue(storages.USER_INFO));

const UserContext = React.createContext(userDetails);
UserContext.displayName = 'APUserContext';

export const UserProvider = (props) => {
  const [user, setUserInfo] = useState(userDetails);
  const setUserForever = (userInfo) => {
    localStorageService.setValue(storages.USER_INFO, JSON.stringify(userInfo));
    setUserInfo(userInfo);
  };
  return <UserContext.Provider value={{ user, setUser: setUserForever }} {...props} />;
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser() must be used within the UserProvider');
  }
  return context;
};
