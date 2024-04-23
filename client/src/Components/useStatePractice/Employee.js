import React from "react";

function Employee({ name, age, country }) {
  return (
    <div>
      <h4>{`this is ${name} aged ${age} from ${country}`}</h4>
    </div>
  );
}

export default Employee;
