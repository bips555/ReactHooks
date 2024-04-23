import React from 'react'

function ButtonComponent({handleClick,children}) {
    console.log('Rendering button',children)
  return (
    <div>
        <button className='btn btn-dark ' onClick={handleClick}>
            {children}
        </button> 
    </div>
  )
}

export default React.memo(ButtonComponent)