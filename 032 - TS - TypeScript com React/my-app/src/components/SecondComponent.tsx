import React from 'react'

interface Props {
    name:string
}

const SecondComponent = (props: Props) => {
  return (
    <div>
        <h1>SecondComponent</h1>
        <p>Name: {props.name}</p>
    </div>
  )
}

export default SecondComponent;