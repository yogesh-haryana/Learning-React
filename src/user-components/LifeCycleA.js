import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            first: ''
        }
        console.log('AAA constructor');
    }
    static getDerivedStateFromProps(states, props) {
        console.log('AAA getDerivedStatefromProps');
        return null

    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('AAA shouldComponentUpdate');
        return null

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('AAA getSnapshotBeforeUpdate');
    }
    componentDidUpdate() {
        console.log('AAA componentDidUpdate');
    }
    buttonClickHandler =()=>{
        this.setState({
            first : 'Haryana'
        })
    }
    render() {
        console.log('AAA rendered')
        return (
            <div>
                <LifecycleB />
                <div>AAA Rendered</div>
                <button onClick={this.buttonClickHandler}>Click Me</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('AAA componentDidMount')

    }
}

export default LifeCycleA