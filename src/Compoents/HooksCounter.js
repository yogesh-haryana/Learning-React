import React, { useState } from 'react'

function HooksCounter() {

    const [count, ClickCounter] = useState(0)
    return (
        <div>
            <button onClick={() => ClickCounter(count + 1)}> count {count}</button>
        </div>
    )
}

export default HooksCounter