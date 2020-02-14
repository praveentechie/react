import React, { Component }   from 'react';
import AtvImg from 'react-atv-img';

export default class AtvImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className=''>
        <AtvImg
          layers={[
            // 'http://kloc.pm/images/back.png',
            '../images/back.png',
            'http://kloc.pm/images/front.png',
            '../images/bg.jpg',
            // '../images/1.jpg'
          ]}
          staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
          isStatic={false}
          className={'thisIsOptional'}
          style={{ width: 320, height: 190 }}
        />
      </div>
    );
  }
}
