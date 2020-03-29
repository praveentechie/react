import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators    from './home.actions';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.actions = bindActionCreators(actionCreators, props.dispatch);
    this.editUserName = this.editUserName.bind(this);
  }

  editUserName(e) {
    this.actions.editUserName(e.target.value);
  }

  render() {
    let { user } = this.props.homeReducer;
    return(
      <div className='page-container'>
        List of components and Arch is available.
      </div>
    );
  }
}

export default connect(state => {
  return {
    homeReducer: state.homeReducer
  };
})(HomeScreen);
