import React, { Component }   from 'react';
import { Link }               from 'react-router-dom';

export default class ComponentsList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='component-list'>
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
          <Link to='/components/scroll-to' className='section-item'>
            Scroll To Content
          </Link>
        </div>
      </div>
    );
  }
}
