/**
 * @deprecated
 * A sample try to replicate InputSlide.js effect
 */
import React, { Component } from 'react';
import './input-slide1.scss';

export default class InputSlide1 extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  handleQueryChange = (query) => {
    this.setState({ query });
  };

  handleSubmit = (e) => {
    const { onSubmit } = this.props;
    const { query } = this.state;
    onSubmit(e, query);
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  updateSlide = (event) => {
    this.setState({ inputSlide: event.target.value });
  }

  // render() {
  //   return (
  //     <span className={`slide-input input-slide ${inputSlide ? 'input-filled' : ''}`}>
  //       <input type='text'
  //         id='input-6'
  //         className='input-field input-field-slide'
  //         onChange={this.updateSlide}
  //       />
  //       <label htmlFor='input-6'
  //         className='input-label input-label-slide input-label-slide-color-2'
  //       >
  //         <span className='input-label-content input-label-content-slide'>
  //           Town
  //         </span>
  //       </label>
  //     </span>
  //   );
  // }

  render() {
    const { query } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <span className={`slide-input input-slide ${query ? 'input-filled' : ''}`}>
          <input
            type="text"
            className="input-field input-field-slide"
            value={query}
            onChange={this.handleQueryChange}
          />
          <label
            htmlFor="input-6"
            className="input-label input-label-slide input-label-slide-color-2"
          >
            <span className="input-label-content input-label-content-slide">
              Town
            </span>
          </label>
          {query && <i className="glyphicon glyphicon-close" onClick={this.clearQuery} />}
          <button primary icon="glyphicon-search" onClick={this.handleSubmit} />
        </span>
      </form>
    );
  }
}
