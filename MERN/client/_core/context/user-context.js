import React, { useState } from "react";

const UserContext = React.createContext(null);
UserContext.displayName = 'APUserContext';

export const UserProvider = (props) => {
  let [user, setUser] = useState(null);
  return <UserContext.Provider value={{user, setUser}} {...props}/>;
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser() must be used within the UserProvider");
  }
  return context;
};