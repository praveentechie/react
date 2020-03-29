import React, { Component }   from 'react';
import './input-field.scss';

export default class InputField extends Component {
  constructor(props) {
    super(props);
  }
  /** ### react defaultProps */
  static defaultProps = {
    inputType: 'text',
    autoComplete: 'on',
    onChangeCallback: () => {}  
  };

  updateVSplit = (event) => {
    this.props.onChangeCallback(event.target.value);
  }

  render() {
    return (
      <span className={`v-input input-v-split ${this.props.value ? 'input-filled' : ''}`}>
        <input className='input-field input-field-v-split'
          type={this.props.inputType}
          id={`input-${this.props.uniqueId}`}
          value={this.props.value}
          onChange={(event) => this.props.onChangeCallback(event.target.value)}
          autoComplete={this.props.autoComplete}
        />
        <label className='input-label input-label-v-split' htmlFor='input-1'>
          <span className='input-label-content input-label-content-v-split'>{this.props.label}</span>
        </label>
      </span>
    );
  }
};