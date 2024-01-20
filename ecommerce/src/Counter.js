import './App.css';
import { useState } from 'react';

function Counter() {
  const [counter , setCounter]=useState(0);

  let count=0;
  const onIncrement =()=>{
    setCounter(counter + 1);
    
  };
  const onDecrement =() =>{
   setCounter(counter -1);
  };
  return (
    <div className="App">
    <div>
      <button onClick={onDecrement}>Decrement</button>
      <span style={{
        marginLeft:"20px",marginRight:"20px"
      }}>Count is {counter}</span>
      <button onClick={onIncrement}>Increment</button>
    </div>
    </div>
    
  );
}

export default Counter;