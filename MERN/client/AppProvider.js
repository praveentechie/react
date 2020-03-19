import { UserProvider } from "./_core/context/user-context";

export default ({children}) => {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
};