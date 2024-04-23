import React from "react";
import "./App.css";
import UseStateDataFetch from "./Components/useStateAnduseReducer/UseStateDataFetch.js";
import UseReducerDataFetch from "./Components/useStateAnduseReducer/UseReducerDataFetch.js";
import MainComponent from "./Components/UseCallbackPractice/MainComponent.js";
import MyMemoCounter from "./Components/useMemoPractice/MyMemoCounter.js";
import FocusInput from "./Components/useRefPractice/FocusInput.js";
// const InitialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "+":
//       return state + 1;
//     case "-":
//       return state - 1;
//     case "reset":
//       return InitialState;
//     default:
//       return state;
//   }

 export const CountContext = React.createContext();

function App() {
  // const [count, dispatch] = useReducer(reducer, InitialState);
  return (
    // <CountContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    //   <div className="App">
    //     Count: {count}
    //     <ComponentA />
    //     <ComponentX />
    //     <ComponentZ />
    //   </div>
    // </CountContext.Provider>
    // <UseStateDataFetch/>
    // <MainComponent/>
    // <MyMemoCounter/>
    <FocusInput/>
  );
}

export default App;
// default export is used when we want to import named it as anything
// named export is used when we exactly specify what named to be imported
