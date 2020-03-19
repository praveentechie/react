import React, { Component }   from 'react';
import { NavLink }            from 'react-router-dom';
import '../scss/AppNavigator.scss';

export default class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.linkSeparator = {
    };
  }
  render() {
    const appLinkList = [
      {
        path: '/home',
        name: 'Home',
        iconClass: 'fa-home'
      }, {
        path: '/components',
        name: 'Components',
        iconClass: 'fa fa-cubes'
      }, {
        path: '/contact',
        name: 'Contact',
        iconClass: 'fa-handshake-o'
      }, {
        path: '/about',
        name: 'About',
        iconClass: 'fa-id-badge'
      }
    ];
    return (
      <div className='app-navigation-container'>
        <h4 className='app-navigation'>
          {
            appLinkList.map(link => {
              return (
                <NavLink key={link.path}
                  to={link.path}
                  activeClassName="active-page"
                >
                  <i className={`fa ${link.iconClass}`}/> {link.name}
                </NavLink>
              );
            })
          }
        </h4>
      </div>
    );
  }
}
