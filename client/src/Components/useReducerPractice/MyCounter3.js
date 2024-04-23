import React from "react";
import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "+":
      return state + 1;
    case "-":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export default function MyCounter3() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state2,dispatch2] = useReducer(reducer,initialState)
  return (
    <>
    <div>
      <h2>{state}</h2>
      <div  className="d-flex justify-content-center align-items-center gap-1">
      <button
        className="btn btn-dark"
        onClick={() => {
          dispatch("+");
        }}
      >
        +
      </button>
      <button
        className="btn btn-dark"
        onClick={() => {
          dispatch("-");
        }}
      >
        -
      </button>
      <button
        className="btn btn-dark"
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset
      </button>
      </div>
    </div>
     <div>
     <h2> counter2 : {state2}</h2>
     <div  className="d-flex justify-content-center align-items-center gap-1">
     <button
       className="btn btn-dark"
       onClick={() => {
         dispatch2("+");
       }}
     >
       +
     </button>
     <button
       className="btn btn-dark"
       onClick={() => {
         dispatch2("-");
       }}
     >
       -
     </button>
     <button
       className="btn btn-dark"
       onClick={() => {
         dispatch2("reset");
       }}
     >
       reset
     </button>
     </div>
   </div>
   </>
  );
}
