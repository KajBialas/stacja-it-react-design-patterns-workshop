import React, { Component } from 'react';

function counterHoc(WrappedComponent) {
  return class extends Component {
    state = { counter: 0};

    handleIncrement = () => this.setState({counter: this.state.counter + 1});

    render() {
      return(
        <WrappedComponent counter={this.state.counter} handleIncrement={this.handleIncrement} />
      )
    }

  }
}

export default counterHoc;