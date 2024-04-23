import React, { useState, useEffect } from "react";

function EffectExample3() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("this is mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect is called");
    window.addEventListener("mousemove", logMousePosition)

    return ()=>
    {
        window.removeEventListener('mousemove',logMousePosition)
        console.log('Component is unmounted')
    }
  }, []);
  return (
    <div>
      <p>mouse position</p>
      cordinate X , Y ={x},{y}
    </div>
  );
}

export default EffectExample3;
