import React, { useState } from "react";

function Counter3() {
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    country: "",
  });
  return (
    <>
      <div>
        <input
          type="text"
          value={employee.name}
          onChange={(e) => {
            setEmployee({ ...employee, name: e.target.value });
          }}
        ></input>
        <input
          type="text"
          value={employee.age}
          onChange={(e) => {
            setEmployee({ ...employee,  age: e.target.value });
          }}
        ></input>
        <input
          type="text"
          value={employee.country}
          onChange={(e) => {
            setEmployee({ ...employee,  country: e.target.value });
          }}
        ></input>
      </div>
      <div>
        <p>{`Name of Employee is ${employee.name}`}</p>
        <p>{`Age of Employee is ${employee.age}`}</p>
        <p>{`Country of Employee is ${employee.country}`}</p>
      </div>
      <div>
        {JSON.stringify(employee)}
      </div>
    </>
  );
}

export default Counter3;
