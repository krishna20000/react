import { useState } from 'react'

import './App.css'

function App() {

  let [counter , setCounter] = useState(0);

  

  let addValue = () => {
    if(counter >= 20){
      counter = 20;
      alert("Counter cannot be more than 20");

    }
    else{
    counter =counter + 1;
    setCounter(counter);
    }
  }

  let removeValue = () => {
    if(counter <= 0){
      counter = 0;
      alert("Counter cannot be less than 0");
    }
    else{
    counter = counter - 1;
    setCounter(counter)
    }
  }
  

  return (
    <>
      <h1>Counter</h1>
      <h2>Count: {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
