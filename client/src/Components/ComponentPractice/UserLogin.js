import React from 'react'

function UserLogin() {
    const isLoggedIn = false
  return (
    <>
{/* { isLoggedIn ?  <h1>Welcome to my project</h1> :
<h2>You cannot access this project</h2>} */}

{
    isLoggedIn && <h1>Welcome to my project</h1> 
  
}

</>
  )
}

export default UserLogin