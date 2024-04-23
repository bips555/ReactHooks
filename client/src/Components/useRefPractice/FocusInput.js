import React, { useEffect, useRef, useState } from "react";

function FocusInput() {
  useEffect(() => {
    inputRef.current.focus()
  },[])
  const inputRef = useRef(null)

  return (
    <div>
      <input ref={inputRef} type="text" />
      
    </div>
  )
}

export default FocusInput;
// useRef is used to store a value that persists across renders but doesn't trigger a re-render when updated
// here in the example used ref is used to put the focus in the input field at the first render