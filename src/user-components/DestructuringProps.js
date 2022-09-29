import React from "react";

// function DestructuringProps({name,inspiration}){
//     return(
//         <div>
//             <h1>{name} is inspired from {inspiration}</h1>
//         </div>
//     )

// }

function DestructuringProps(props){
    const {name,inspiration} = props
    return(
        <div>
            <h1>{name} is inspired from {inspiration}</h1>
        </div>
    )

}

export default DestructuringProps;