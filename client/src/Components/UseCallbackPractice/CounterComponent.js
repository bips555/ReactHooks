import React, { Children } from 'react'

function CounterComponent({text,count}) {
   console.log(`Rendering ${text}`)
  return (
    <div className='fw-bold'>
        {`${text} count is ${count}`}</div>
  )
}

export default React.memo(CounterComponent)