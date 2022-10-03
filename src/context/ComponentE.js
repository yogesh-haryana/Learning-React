import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentE extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <div> hello {username}</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentE