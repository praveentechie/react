import { useState } from "react";
import { Button } from "react-bootstrap";
import { useUser } from "_core/context/user-context";
import InputField from "_shared/input-field/InputField";
import './login-page.scss';

export default (props) => {
  const {setUser} = useUser();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <h2 className="login-form">Login</h2>
      <form name="login-form" className="login-form">
        <InputField
          uniqueId="userName"
          label="User name"
          value={userName}
          onChangeCallback={setUserName}
          autoComplete="off"
        />
        <InputField
          uniqueId="password"
          inputType="password"
          label="Password"
          value={password}
          onChangeCallback={setPassword}
        />
        <div>
          <Button className="float-right"
            variant="primary"
            disabled={!userName || !password}
            onClick={() => setUser({name: userName})}
          >Login</Button>
          {/* ### react hook: cant be used directly in dom elements;
            * below line will throw error
          <button onClick={() => useUser().setUser({})}>Login</button> */}
        </div>
      </form>
    </div>
  );
}