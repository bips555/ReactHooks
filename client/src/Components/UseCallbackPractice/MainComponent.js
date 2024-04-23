import React, { useState, useCallback } from "react";
import CounterComponent from "./CounterComponent.js";
import ButtonComponent from "./ButtonComponent.js";

function MainComponent() {
  const [teachers, setTeachers] = useState(25);
  const [students, setStudents] = useState(50);
  const incrementTeachers = useCallback(() => {
    setTeachers(teachers + 5);
  },[teachers]);

  const incrementStudents = useCallback(() => {
    setStudents(students + 10);
  },[students]);
  return (
    <div className="App">
      <h2 className="my-3">UseCallBack practice</h2>
      <CounterComponent text=" Teachers" count={teachers} />
      <ButtonComponent handleClick={incrementTeachers}>
        Increment Teachers
      </ButtonComponent>
      <CounterComponent text=" Students" count={students} />
      <ButtonComponent handleClick={incrementStudents}>
        Increment Students
      </ButtonComponent>
    </div>
  );
}

export default React.memo(MainComponent);
