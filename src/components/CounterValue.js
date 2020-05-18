import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';

function CounterValue() {
  const count = useSelector((state) => state.counter);

  return (
    <div className="mt-6">
      <div className=" wrapper-counter">
        <div className="counter-rezult">{count}</div>
      </div>
      <span className="description-text">Rezult of the counter</span>
    </div>
  );
}

export default CounterValue;
