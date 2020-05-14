import React, { useState } from 'react';
import '../App.css';

function Counter() {
  const [count, onSetCount] = useState(0);

  function increment() {
    onSetCount(count + 1);
  }

  function decrement() {
    onSetCount(count - 1);
  }

  return (
    <div className="mt-6">
      <div className="wrapper-counter">
        <button onClick={decrement} className="button">
          -
        </button>
        <div className="counter">{count}</div>
        <button onClick={increment} className="button">
          +
        </button>
      </div>
      <span className="description-text">
        Please press buttons to inceremnt or decrement!
      </span>
    </div>
  );
}

export default Counter;
