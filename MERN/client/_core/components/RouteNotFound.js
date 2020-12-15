import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class RouteNotFound extends PureComponent {
  render() {
    return (
      <div className="route-not-found">
        <div className="not-found-title">404</div>
        <div className="not-found-text">OOPS!! Lost your way??</div>
        <div className="not-found-text">
          Exit this way
          <i className="fa fa-map-signs" />
          {' '}
          <Link to="/home">Home</Link>
        </div>
      </div>
    );
  }
}
