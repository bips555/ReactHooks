import React from 'react'
import { useState } from 'react'
function TitleComponent() {
    const [title,changeTitle]=useState("React js course for beginners")
  return (
    <>
    <h1>{title}</h1>
    <button onClick={()=>
    {
        changeTitle('already a pro now')
    }}>change the title</button>
    </>
  )
}

export default TitleComponent