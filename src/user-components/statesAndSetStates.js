import React, { Component } from 'react'

 class StatesAndSetStates extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }
    increment() {
        // this.setState({
        //   count : this.state.count + 1
        // },
        // () => {
        //     console.log('the callback value is '+ this.state.count);
        // })

        this.setState((previousState,props) => ({
            count : previousState.count + props.addValue
        }))
       console.log(this.state.count);
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
  render() {
    return (
      <div>
        <h1>count - {this.state.count}</h1>
        <button onClick={()=> this.incrementFive()}>increment</button>
      </div>
    )
  }
}

export default StatesAndSetStates;