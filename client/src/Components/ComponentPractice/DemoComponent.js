import React from 'react'

export function DemoComponent({name,country,age,children})
{
return (
    <>
    <h1>I am {name} from {country} and my age is {age}</h1>
    <h2>{children}</h2>
    </>
)
}
