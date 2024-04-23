import React, { useEffect, useReducer } from "react";
import axios from "axios";
const InitialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Datafetch_success":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "Datafetch_fail":
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};

function UseReducerDataFetch() {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com///posts/1")
      .then((res) => {
        dispatch({ type: "Datafetch_success", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "Datafetch_fail" });
      });
  });
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <div className="App">
      {state.loading ? "Data is loading" :<h2> {state.post.title}</h2>}
      {state.error && <p>{state.error}</p>}
    </div>
  );
}

export default UseReducerDataFetch;
