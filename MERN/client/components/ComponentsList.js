import React, { Component }   from 'react';
import { Link }               from 'react-router';

export default class ComponentsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='components-list'>
        <div className='component-section'>
          <Link to='/components/loader' className='section-item'>
            Loader
          </Link>
          <Link to='/components/table' className='section-item'>
            Table
          </Link>
          <Link to='/components/button' className='section-item'>
            Button
          </Link>
          <Link to='/components/input-field' className='section-item'>
            Input Field
          </Link>
          <Link to='/components/atv-image' className='section-item'>
            Atv Image
          </Link>
        </div>
      </div>
    );
  }
}
