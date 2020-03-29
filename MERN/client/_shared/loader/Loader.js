import React, {Component}     from 'react';
import './loader.scss';

export default class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='cssload-loading cutom-pos'>
      	<div className='cssload-finger cssload-finger-1'>
      		<div className='cssload-finger-item'>
      			<span></span><i></i>
      		</div>
      	</div>
      	<div className='cssload-finger cssload-finger-2'>
      		<div className='cssload-finger-item'>
      			<span></span><i></i>
      		</div>
      	</div>
      	<div className='cssload-finger cssload-finger-3'>
      		<div className='cssload-finger-item'>
      			<span></span><i></i>
      		</div>
      	</div>
      	<div className='cssload-finger cssload-finger-4'>
      		<div className='cssload-finger-item'>
      			<span></span><i></i>
      		</div>
      	</div>
      	<div className='cssload-last-finger'>
      		<div className='cssload-last-finger-item'><i></i></div>
      	</div>
        <div className='loading-text'>Loading...</div>
      </div>
    );
  }
}
