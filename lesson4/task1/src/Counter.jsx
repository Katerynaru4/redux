import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './counter.actions.js';

const Counter = ({ counter, incr, decr, res }) => {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decr}>
        -
      </button>
      <span className="counter__value" onClick={res}>
        {counter}
      </span>
      <button className="counter__button" onClick={incr}>
        +
      </button>
    </div>
  );
};
const mapDispatch = (dispatch) => {
  return {
    incr: () => dispatch(increment()),
    decr: () => dispatch(decrement()),
    res: () => dispatch(reset()),
  };
};
const mapState = (state) => {
  return {
    counter: state,
  };
};

const connector = connect(mapState, mapDispatch); // HOC

export default connector(Counter);
