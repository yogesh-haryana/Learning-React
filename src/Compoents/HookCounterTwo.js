import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const IncrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count => count +1)
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            count : {count}
            {/* <button onClick={() => setCount(initialCount)}>RESET</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={IncrementFive}>Increment 5</button> */}

            <button onClick={() => setCount(initialCount)}>RESET</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={IncrementFive}>Increment 5</button>

        </div>
    )
}

export default HookCounterTwo