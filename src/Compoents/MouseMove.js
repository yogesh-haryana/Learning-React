import React, { useState, useEffect } from 'react'

function MouseMove() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const mouseMovePosition = (e) => {
        console.log('mouse moved');
        setX(e.clientX)
        setY(e.clientY)

    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', mouseMovePosition)
        
        return () => {
            console.log('unmounting using useEffect');
            window.removeEventListener('mousemove',mouseMovePosition)
        }


    },[])

    return (
        <div>
            <h2>x - {x}</h2>
            <h2>y - {y}</h2>

        </div>
    )
}

export default MouseMove