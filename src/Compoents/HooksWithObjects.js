import React, { useState } from 'react'

function HooksWithObjects() {

    const [name, getName] = useState({ firstName: '', lastName: '' })

    return (
        <div>
            <input type='text'
                value={name.firstName}
                onChange={event => getName({ ...name, firstName: event.target.value })} />
            <input type='text'
                value={name.lastName}
                onChange={event => getName({ ...name, lastName: event.target.value })} />
            <h1> First name is {name.firstName}</h1>
            <h1>Last name is {name.lastName}</h1>

        </div>
    )
}

export default HooksWithObjects