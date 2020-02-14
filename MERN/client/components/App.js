import React, {Component}   from 'react';
import AppNavigator         from './AppNavigator';
import '../scss/mern.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='app-container'>
        <h1 className='page-title'>
          <i className='fa fa-angellist'/> MERN Stack
        </h1>
        <AppNavigator />
        {this.props.children}
      </div>
    );
  }
}
