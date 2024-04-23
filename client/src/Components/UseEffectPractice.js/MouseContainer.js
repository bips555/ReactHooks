import React,{useState,useEffect} from 'react'
import EffectExample3 from './EffectExample3.js'
function MouseContainer() {
  const [display,setDisplay]=  useState(false)

  return (
    <div>
         {display && <EffectExample3/>}
         <button className='btn m-4' onClick={()=>{setDisplay(!display)}}>Toggle Display</button>
    </div>
  )
}

export default MouseContainer
