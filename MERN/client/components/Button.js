import React, { Component }   from 'react';
import { Button }             from 'react-bootstrap';
import '../scss/components/_Button.scss';

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    document.title =  `${props.title} - Button`;
  }
  render() {
    return (
      <div className='button-component'>
        <h2>Button Component</h2>
        <div className='button-display'>
          <div className='button-section'>
            <h4 className='button-title'>Previous arrow on hover</h4>
            <span className='section-helper'>Add span with class '.before'</span>
            <Button className='btn btn-primary hoverable'>
              <span className='before'>Previous</span>
            </Button>
          </div>
          <div className='button-section'>
            <h4 className='button-title'>Next arrow on hover</h4>
            <span className='section-helper'>Add span with class '.before'</span>
            <Button className='btn btn-primary hoverable'>
              <span className='after'>Next</span>
            </Button>
          </div>
          <div className='button-section'>
            <h4 className='button-title'>Clickable</h4>
            <span className='section-helper'>Bounce effect on Click</span>
            <Button className='btn btn-primary clickable'>
              Click Me :)
            </Button>
          </div>
          <div className='button-section'>
            <h4 className='button-title'>Ripple</h4>
            <span className='section-helper'>Ripple effect on Click</span>
            <Button className='btn btn-primary ripple'>
              Click Me :)
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
