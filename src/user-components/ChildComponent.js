import React from 'react'

function ChildComponent(props) {
  return (
    // <div><button onClick={props.greetHandler}>Greetings</button></div>
    <div><button onClick={() => props.greetHandler('child')}>Greetings</button></div>

  )

}

export default ChildComponent