import React, { useState } from "react";

function FormInput() {
  const [name, setname] = useState("");
  console.log(name)
  return (
    <div>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}

export default FormInput;
