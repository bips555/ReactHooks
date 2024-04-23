import React from "react";
import Employee from './Employee.js'
function EmployeeList() {
  const employees = [
    {
      id:1,
      name: "BIPLOV",
      age: "22",
      country: "nepal",
    },
    {
      id:2,
      name: "LOVBIP",
      age: "23",
      country: "lapen",
    },
    {
      id:3,
      name: "SUBEDI",
      age: "24",
      country: "india",
    },
    {
      id:4,
      name: "IDEbUS",
      age: "25",
      country: "aidin",
    },
  ];
  return (
    <>
      <div>EmployeeList</div>
      <div>
        {employees.map((employees) => (
          <div  key={employees.id}>
         <Employee  name={employees.name} age={employees.age} country={employees.country}/>
         </div>
        ))}
      </div>
    </>
  );
}

export default EmployeeList;
