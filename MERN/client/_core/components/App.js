import React from 'react';
import {
  DropdownButton,
  Dropdown
} from 'react-bootstrap';
import AppNavigator from './AppNavigator';
import { useUser } from '../context/user-context';

const App = (props) => {
  const { user, setUser } = useUser();
  return (
    <div className="app-container">
      <section className="header-section">
        <div className="logo-content">
          <i className="fa fa-angellist fa-3x" />
        </div>
        <h1 className="page-title">MERN Stack</h1>
        <div className="global-actions">
          <DropdownButton
            id="global-action-menu"
            variant="none"
            title={user.name}
          >
            <Dropdown.Item eventKey="1" onClick={() => { return setUser(null); }}>Logout</Dropdown.Item>
          </DropdownButton>
        </div>
      </section>
      <AppNavigator />
      {props.children}
    </div>
  );
};

App.displayName = 'App';
export default App;