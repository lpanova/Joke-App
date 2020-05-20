import React from 'react';
import { useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementWithValue } from '../actions/counterActions';

function CounterValue() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);

  function handleChange(event) {
    let value = parseInt(event.target.value);
    setNumber(value);
  }

  return (
    <div className="mt-6">
      <div className=" wrapper-counter">
        <div className="counter-rezult">{count}</div>
      </div>
      <div>
        <div className="wrapper-counter">
          <button
            className="button"
            onClick={() => dispatch(incrementWithValue(number))}
          >
            -
          </button>
          <input type="" name="number" onChange={handleChange} />
          <button
            className="button"
            onClick={() => dispatch(incrementWithValue(number))}
          >
            +
          </button>
        </div>
      </div>
      <span className="description-text">Rezult of the counter</span>
    </div>
  );
}

export default CounterValue;
