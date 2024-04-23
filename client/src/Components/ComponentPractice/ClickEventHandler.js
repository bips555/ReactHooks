import React from 'react'

function ClickEventHandler() {
    const clickHandler=()=>
    {
        document.write('You clicked an action button')
    }
  return (
  <>
    <div>ClickEventHandler</div>
    <button onClick={clickHandler}>CLick me</button>
    </>
  )
}

export default ClickEventHandler