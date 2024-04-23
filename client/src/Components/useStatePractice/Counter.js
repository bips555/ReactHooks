import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)

  return (
    <div className='bg-dark text-light p-5 '>
        <h1>{`Count is : ${count}`}</h1>
        <button className='btn text-light' onClick={()=>{setCount(count-1)}}>Click here</button>
    </div>
  )
}

export default Counter