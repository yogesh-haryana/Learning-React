import React, { useState, useEffect } from 'react'
import MouseMove from './MouseMove'

function MouseContainer() {

    const [display, setDisplay] = useState(true)

    useEffect(() => {
        console.log('useEffect called');

    })


    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <MouseMove />}
        </div>
    )
}

export default MouseContainer