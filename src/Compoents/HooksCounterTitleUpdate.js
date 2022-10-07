import React, { useState, useEffect } from 'react'

function HooksCounterTitleUpdate() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')


    // useEffect accepts a function as a parameter that will run after every render of the component.
    useEffect(() => {
        console.log('update happens');
        document.title = `clicked ${count} times `
    }, [count])

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}> clicked {count} times</button>
        </div>
    )
}

export default HooksCounterTitleUpdate