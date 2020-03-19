import React from "react";
import { UserProvider } from "./_core/context/user-context";

export const AppProvider = ({children}) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
};