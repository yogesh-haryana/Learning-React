import React from 'react'

// function ForwardInput() {
//   return (
//     <div>
//         <input type='text'></input>
//     </div>
//   )
// }

const ForwardInput = React.forwardRef((props,ref)=>{
    return (
        <div>
            <input type='text' ref={ref}></input>
        </div>
      )

}) 




export default ForwardInput