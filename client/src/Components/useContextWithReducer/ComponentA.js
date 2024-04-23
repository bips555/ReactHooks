import React, { useContext } from "react";
import { CountContext } from "../../App.js";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
    ComponentA
      <button onClick={() => countContext.countDispatch("+")}>+</button>
      <button onClick={() => countContext.countDispatch("-")}>-</button>
      <button onClick={() => countContext.countDispatch("reset")}>reset</button>
    </div>
  );
}

export default ComponentA;
