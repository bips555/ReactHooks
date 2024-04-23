import React,{useEffect, useState} from 'react'

function EffectExample1() {
    const [count,setCount]= useState(0)
    useEffect(()=>{
        document.title=`you clicked : ${count}`
    })
  return (
    <div>
       <h2 className='bg-dark text-light'> {count}</h2>
        <button className='btn bg-dark text-light' onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
} 

export default EffectExample1
