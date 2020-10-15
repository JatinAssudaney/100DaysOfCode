import React, { Component } from "react";

class ClassCounter extends Component {
  state = { count: 0 };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrementCount}>-</button>
        <div>Count: {this.state.count}</div>
        <button onClick={this.incrementCount}>+</button>
      </div>
    );
  }
}

export default ClassCounter;
