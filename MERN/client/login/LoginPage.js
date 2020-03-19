import { useUser } from "../_core/context/user-context";

export default (props) => {
  console.log('useUser', useUser());
  const {setUser} = useUser();
  return (
    <div className="login-container">
      Hello user
      <button onClick={() => setUser({name: 'Praveen'})}>Login</button>
      {/* ### react hook: cant be used directly in dom elements;
        * below line will throw error
      <button onClick={() => useUser().setUser({})}>Login</button> */}
    </div>
  );
}