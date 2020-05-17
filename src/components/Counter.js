import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="mt-6">
      <div className="wrapper-counter">
        <button onClick={() => dispatch(decrement())} className="button">
          -
        </button>
        <div className="counter">{count}</div>
        <button onClick={() => dispatch(increment())} className="button">
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
