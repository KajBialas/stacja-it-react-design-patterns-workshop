import React from 'react';
import useCounter from './useCounter';
function Counter() {
  const { counter, handleIncrement } = useCounter(10);

  return (
    <div>
      Counter: {counter}
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default Counter;