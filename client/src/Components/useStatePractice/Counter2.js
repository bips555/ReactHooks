import React, { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  const increment = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count=>count+1);
    }
  };
  const decrement = ()=>
  {
    for (let i = 0 ; i<5 ; i++)
    {
        setCount(count=>count -1)
    }
  }
  const reset = ()=>
  {
   const count = 0
        setCount(count) 
  }

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn btn-dark text-light mx-1" onClick={increment}>
        Increment
      </button>
      <button
        className="btn btn-dark text-light mx-1"
        onClick={decrement}
      >
        Decrement
      </button>
      <button
        className="btn btn-dark text-light mx-1"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter2;
