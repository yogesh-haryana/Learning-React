import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message : 'Hello'
        }
    }
    clickHandler() {
        this.setState({
            message : 'GoodBye'
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler.bind(this)}>Click me</button>

            </div>
        )
    }
}

export default EventBinding;