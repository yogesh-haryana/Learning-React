import React from 'react'

function FuctionClick() {
    function clickHandler(){
        console.log('button clicked')
    }
  return (
    <div>
        <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}



export default FuctionClick