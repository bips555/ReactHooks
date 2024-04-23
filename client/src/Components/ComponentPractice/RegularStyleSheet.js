import React from 'react'
import './MyStyle.css'
function RegularStyleSheet(props) {
    const className = props.primary ? 'primary' : 'secondary'
  return (
   
    <div>
        <h1 className={className}>Learning how to style react component.</h1>
    </div>
  )
}

export default RegularStyleSheet