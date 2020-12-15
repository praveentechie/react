import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { useDocumentTitle } from '_shared/hooks/browser-utils';
import * as actionCreators from './component.actions';
import ComponentsList from './components/ComponentsList';

import './component-module.scss';

class ComponentScreen extends Component {
  constructor(props) {
    super(props);
    useDocumentTitle('React Components');
    this.actions = bindActionCreators(actionCreators, props.dispatch);
  }

  componentDidMount() {
    this.actions.initUsers();
  }

  addChildProps(element) {
    return React.cloneElement(element, { title: 'Components' });
  }

  render() {
    const { children } = this.props;
    return (
      <div className="components-list-page">
        <div className="component-nav-container">
          <ComponentsList />
          {
            children
              ? Array.isArray(children)
                ? children.map((childNode) => {
                  return this.addChildProps(childNode);
                })
                : this.addChildProps(children)
              : null
          }
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    userReducer: state.userReducer
  };
})(ComponentScreen);
