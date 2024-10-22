import React, { Component } from 'react';
import InputSlide from '_shared/input-field/InputSlide';
import InputField from '_shared/input-field/InputField';

export default class InputFieldComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue1: ''
    };
  }

  render() {
    return (
      <div className="component-container">
        <div className="component-wrapper">
          <h3 className="component-title">Field 1</h3>
          <InputField
            uniqueName="test-field"
            label="First name"
            value={this.state.inputValue1}
            onChangeCallback={(value) => { return this.setState({ inputValue1: value }); }}
          />
        </div>
        <div className="component-wrapper">
          <h3 className="component-title">Field 2</h3>
          <InputSlide />
        </div>
      </div>
    );
  }
}
