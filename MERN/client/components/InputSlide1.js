import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import s from '../scss/components/_InputSlide1.scss';

class Search extends Component {

  static propTypes = {
    onSubmit: React.PropTypes.func.isRequired
  };

  state = {
    query: ''
  };

  handleQueryChange = query => {
    this.setState({ query });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { query } = this.state;
    onSubmit(e, query);
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  updateSlide = (event) => {
    this.setState({inputSlide: event.target.value})
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
    const clearInput = cx(s.clearInput, 'glyphicon glyphicon-close');
    const { query } = this.state;
    return (
      <form
        className={s.searchForm}
        onSubmit={this.handleSubmit}
      >
        <span className={`slide-input input-slide ${query ? 'input-filled' : ''}`}>
          <input type="text"
            className="input-field input-field-slide"
            value={query}
            onChange={this.handleQueryChange}
          />
          <label htmlFor='input-6'
            className='input-label input-label-slide input-label-slide-color-2'
          >
            <span className='input-label-content input-label-content-slide'>
              Town
            </span>
          </label>
          {query && <i className={clearInput} onClick={this.clearQuery} />}
          <button primary icon="glyphicon-search" onClick={this.handleSubmit}/>
        </span>
      </form>
    );
  }
}

export default Search;
