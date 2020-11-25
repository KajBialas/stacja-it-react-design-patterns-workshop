import React from 'react';
import counterHoc from './counter.hoc';

function Counter({ counter, handleIncrement}) {

  return (
    <div>
      Counter: {counter}
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default counterHoc(Counter);