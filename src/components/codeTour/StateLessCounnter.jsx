import React from 'react'

const StateLessCounnter = () => {

  let counter = 0;

  const increment = () => {
    counter ++;
  };

  const decrement = () => {
    counter--
  };

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      <span>{counter}</span>
      <button onClick={increment} >Increment</button>
    </div>
  )
}

export default StateLessCounnter
