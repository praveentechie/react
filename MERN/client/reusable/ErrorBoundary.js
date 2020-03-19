import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
    this.setState({error});
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{padding: '0 15px'}}>
          <h3 style={{fontSize: '1.25em'}}>Oops!!!</h3>
          <p>Your component failed to render but I handled the error</p>
          <span style={{fontStyle: 'italic'}}>{"" + this.state.error}</span>
        </div>
      );
    }
    return this.props.children;
  }
}