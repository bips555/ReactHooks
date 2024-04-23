import React, { useMemo, useState } from "react";

function MyMemoCounter() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const incrementA = () => {
    setCountA(countA + 1);
  };
  const incrementB = () => {
    setCountB(countB + 1);
  };

  const evenNumber = useMemo(
    (result) => {
      let i = 0;
      while (i < 1000000000) i++;
      result = countA % 2 === 0;
      return result;
    },
    [countA]
  );
  return (
    <div className="App">
      <h2>
        counter A is : {countA} and it is : {evenNumber ? "even" : "odd"}
      </h2>
      <h2> {countB}</h2>
      <button className="btn btn-dark mx-1" onClick={incrementA}>
        +A
      </button>
      <button className="btn btn-dark" onClick={incrementB}>
        +B
      </button>
    </div>
  );
}

export default MyMemoCounter;
