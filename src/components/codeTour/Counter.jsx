import React, { useState } from 'react'
import CounterValueFromProps from './CounterValueFromProps';

const Counter = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => {setCounter((prevState) => {
    setCounter(prevState + 1)
  })};

  const decrement = () => {setCounter((prevState) => {
    setCounter(prevState - 1)
  })};

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      <span>{counter}</span>
      <button onClick={increment} >Increment</button>
      <br/>
      <CounterValueFromProps counter={counter} />
    </div>
  )
}

export default Counter
