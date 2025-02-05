import React, { Component } from 'react';
import Loader from '_shared/loader/Loader';

export default class PageLoaders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component-container">
        <div className="component-wrapper" style={{ position: 'relative' }}>
          <h3 className="component-title">Loader 1</h3>
          <Loader />
        </div>
        <div className="component-wrapper" style={{ position: 'relative' }}>
          <h3 className="component-title">Loader 2</h3>
          <i className="fa fa-spinner fa-spin fa-5x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}
