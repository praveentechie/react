import React, { Component }   from 'react';
import { Link }               from 'react-router-dom';
import '../scss/AppNavigator.scss';

export default class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.linkSeparator = {
    };
  }
  render() {
    return (
      <div className='app-navigation-container'>
        <h4 className='app-navigation'>
          <Link to='/home'><i className='fa fa-home'/> Home</Link>
          <Link to='/components'><i className='fa fa-cubes'/> Components</Link>
          <Link to='/contact'><i className='fa fa-handshake-o'/> Contact</Link>
          <Link to='/about'><i className='fa fa-id-badge'/> About</Link>
        </h4>
      </div>
    );
  }
}
