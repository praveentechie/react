import { Component } from "react";

export default class TriggerError extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }

  triggerError = () => {
    this.setState({
      isError: true
    });
  };

  render() {
    if (this.state.isError) {
      throw new Error('Error from TriggerError component');
    }

    return (
      <>
        <h3>Handle error from component</h3>
        <div className="action-container">
          <button onClick={this.triggerError}>Generate error</button>
        </div>
      </>
    );
  }
}