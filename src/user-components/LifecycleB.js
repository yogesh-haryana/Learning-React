import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: ''
        }
        console.log('BBB constructor');
    }
    static getDerivedStateFromProps(states, props) {
        console.log('BBB getDerivedStatefromProps');
        return null

    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('BBB shouldComponentUpdate');
        return null

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('BBB getSnapshotBeforeUpdate');
    }
    componentDidUpdate() {
        console.log('BBB componentDidUpdate');
    }
    render() {
        console.log('BBB rendered');
        return (
                <div>BBB Rendered</div>

        )
    }
    componentDidMount() {
        console.log('BBB componentDidMount')

    }
}

export default LifecycleB