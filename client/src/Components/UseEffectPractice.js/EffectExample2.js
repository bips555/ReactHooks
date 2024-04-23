import React,{useEffect, useState} from 'react'

function EffectExample2() {
    const [count,setCount]= useState(0)
    const [name,SetName]=useState('')
    useEffect(()=>{
        document.title=`you clicked : ${count}`
        console.log('useEffect is called')
    },[count])
  return (
    <div>
       <h2 className='bg-dark text-light'> {count}</h2>
        <button className='btn bg-dark text-light' onClick={()=>setCount(count+1)}>+</button>
        <input type='text' value={name} onChange={(e)=>{SetName(e.target.value)}}/>
    </div>
  )
} 

export default EffectExample2
