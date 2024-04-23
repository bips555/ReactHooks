import React, { useContext } from 'react'
import { CountContext } from '../../App.js'

function ComponentZ() {
    const countContext = useContext(CountContext)
    return (
      <div>
       ComponentZ
          <button onClick={()=>{countContext.countDispatch('+')}}>+</button>
          <button onClick={()=>{countContext.countDispatch('-')}}>-</button>
          <button onClick={()=>{countContext.countDispatch('reset')}}>reset</button>
      </div>
    )
}

export default ComponentZ
