import React, { useState } from "react";
import { storages } from "../core-constants";

/** ### react context and localStorage
 * ### JS: localStorage read and write data from/to local storage
 */
console.log('saved Data', localStorage.getItem(storages.USER_INFO));
const userDetails = JSON.parse(localStorage.getItem(storages.USER_INFO));
const UserContext = React.createContext(userDetails);
UserContext.displayName = 'APUserContext';

export const UserProvider = (props) => {
  let [user, setUserInfo] = useState(userDetails);
  const setUserForever = (userInfo) => {
    localStorage.setItem(storages.USER_INFO, JSON.stringify(userInfo));
    setUserInfo(userInfo);
  };
  return <UserContext.Provider value={{user, setUser: setUserForever}} {...props}/>;
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser() must be used within the UserProvider");
  }
  return context;
};