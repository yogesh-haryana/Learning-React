import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter : 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value };

        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value };

        case 'increment2':
            return { ...state, secondCounter : state.secondCounter + action.value };

        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value };

        case 'reset':
            return initialState;        
        default:
            return state;

    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer , initialState)
    return (
        <div>
            <div> count = {count.firstCounter} </div>
            <div> count = {count.secondCounter} </div>
            <button onClick={() => dispatch({ type: 'increment' , value : 10 })}> Increment </button>
            <button onClick={() => dispatch({ type: 'decrement' , value : 2.5 })}> Decrement </button>
            <button onClick={() => dispatch({ type: 'increment2', value : 5 })}> Incrementsecond </button>
            <button onClick={() => dispatch({ type: 'decrement2', value : 1.25 })}> Decrementsecond </button>
            <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
        </div>
    )
}

export default CounterTwo