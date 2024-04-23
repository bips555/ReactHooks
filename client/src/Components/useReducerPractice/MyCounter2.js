import React from "react";
import { useReducer } from "react";

const InitialState = { counterA: 0, counterB: 15 };
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { ...state, counterA: state.counterA + action.value };
    case "-":
      return { ...state, counterA: state.counterA - action.value };
    case "+B":
      return { ...state, counterB: state.counterB + action.value };
    case "-B":
      return { ...state, counterB: state.counterB - action.value };
    case "reset":
      return InitialState;
    default:
      return state;
  }
};

function MyCounter2() {
  const [count, dispatch] = useReducer(reducer, InitialState);
  return (
    <div>
      <h2>counterA:{count.counterA}</h2>
      <h2>counterB:{count.counterB}</h2>
      <div className="gap-1 d-flex justify-content-center">
        <button
          className="btn btn-dark"
          onClick={() => {
            dispatch({ type: "+", value: 1 });
          }}
        >
          +
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            dispatch({ type: "-", value: 1 });
          }}
        >
          -
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            dispatch({ type: "+", value: 5 });
          }}
        >
          +5
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            dispatch({ type: "-", value: 5 });
          }}
        >
          -5
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            dispatch({ type: "+B", value: 5 });
          }}
        >
          + counter B
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            dispatch({ type: "-B", value: 5 });
          }}
        >
          -counter B
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default MyCounter2;
