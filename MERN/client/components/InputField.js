import React, { Component }   from 'react';
import InputSlide             from './InputSlide';
import InputSlide1            from './InputSlide1';
import '../scss/components/_InputField.scss';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.updateVSplit = this.updateVSplit.bind(this);

    this.state = {
      vSplit: ''
    };
  }

  updateVSplit(event) {
    this.setState({vSplit: event.target.value});
  }

  render() {
    const {vSplit} = this.state;

    return (
      <div className='component-container'>
        <div className='component-wrapper'>
          <h3 className='component-title'>Field 1</h3>
          <span className={`v-input input-v-split ${vSplit ? 'input-filled' : ''}`}>
            <input className='input-field input-field-v-split'
              type='text'
              id='input-1'
              value={vSplit}
              onChange={this.updateVSplit}
            />
            <label className='input-label input-label-v-split' htmlFor='input-1'>
              <span className='input-label-content input-label-content-v-split'>First Name</span>
            </label>
          </span>
        </div>
        <div className='component-wrapper'>
          <h3 className='component-title'>Field Style 2</h3>
          <InputSlide />
          <InputSlide1 />
        </div>
      </div>
    );
  }
}
