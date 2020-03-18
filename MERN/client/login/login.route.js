import { Route } from "react-router-dom";
import LoginPage from "./LoginPage";

export default (reducerRegistry) => {
  return (
    <Route path="/login">
      <LoginPage/>
    </Route>
  );
};