import React, {Component}   from 'react';
import AppNavigator         from './AppNavigator';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useUser } from "../_core/context/user-context";
import '../scss/mern.scss';

export default (props) => {
  const { user, setUser } = useUser();
  return (
    <div className='app-container'>
      <section className="header-section">
        <div className="logo-content">
          <i className='fa fa-angellist fa-3x'/>
        </div>
        <h1 className='page-title'>
          MERN Stack
        </h1>
        <div className="global-actions">
          <DropdownButton
            id="global-action-menu"
            variant="none"
            title={user.name}
          >
            <Dropdown.Item eventKey="1" onClick={() => setUser(null)}>Logout</Dropdown.Item>
          </DropdownButton>
        </div>
      </section>
      <AppNavigator />
      {props.children}
    </div>
  );
};
