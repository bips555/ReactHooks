import React, { useContext } from 'react'
import { CountContext } from '../../App.js'

function ComponentX() {
    const countContext = useContext(CountContext)
  return (
    <div>
        ComponentX
        <button onClick={()=>{countContext.countDispatch('+')}}>+</button>
        <button onClick={()=>{countContext.countDispatch('-')}}>-</button>
        <button onClick={()=>{countContext.countDispatch('reset')}}>reset</button>
    </div>
  )
}

export default ComponentX