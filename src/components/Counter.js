import React from 'react';
import '../App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(event) {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement(event) {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div className="mt-6">
        <div className="wrapper-counter">
          <button onClick={this.decrement} className="button">
            -
          </button>
          <div className="counter">{this.state.count}</div>
          <button onClick={this.increment} className="button">
            +
          </button>
        </div>
        <span className="description-text">
          Please press buttons to inceremnt or decrement!
        </span>
      </div>
    );
  }
}

export default Counter;
