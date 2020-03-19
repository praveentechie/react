import React from "react";

const UserContext = React.createContext(null);
UserContext.displayName = 'APUserContext';

export const UserProvider = (props) => {
  const user = {name: 'Praveen', userId: '1234ap'};
  return <UserContext.Provider value={user} {...props}>{props.children}</UserContext.Provider>;
}

export const useUser = () => {
  const context = React.useContext(UserContext);
  console.log('context', context);
  if (context === undefined) {
    throw new Error("useUser() must be used within the UserProvider");
  }
  return context;
}