import React, { Component }   from 'react';
import Loader                 from './Loader';

export default class PageLoaders extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='component-container'>
        <div className='component-wrapper' style={{position: 'relative'}}>
          <h3 className='component-title'>Tapping Loader</h3>
          <Loader />
        </div>
      </div>
    );
  }
}
