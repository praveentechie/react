import React, { Component }   from 'react';
import '../scss/components/_InputSlide.scss';

export default class InputSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSlide: null
    };
    this.updateSlide = this.updateSlide.bind(this);
  }
  updateSlide(event) {
    this.setState({inputSlide: event.target.value})
  }
  render() {
    let {inputSlide} = this.state;
    return (
      <span className={`slide-input input-slide ${inputSlide ? 'input-filled' : ''}`}>
        <input type='text'
          id='input-6'
          className='input-field input-field-slide'
          onChange={this.updateSlide}
        />
        <label htmlFor='input-6'
          className='input-label input-label-slide input-label-slide-color-2'
        >
          <span className='input-label-content input-label-content-slide'>
            Town
          </span>
        </label>
      </span>
    );
  }
}
