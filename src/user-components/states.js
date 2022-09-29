import React from "react";
import { Component } from "react";

class LearnStates extends Component{
    constructor() {
    super()
    this.state = {
        message : 'Welcome Visitor',
        thanksMessage : ''
    }
    }
    changeMessage = () => {
        this.setState({
            thanksMessage : 'Thank you for Subscribing'
        })
    }
    render(){
        return (
           <div> <h1>{this.state.message}</h1>
           <button onClick={()=> this.changeMessage()}>Subscribe</button>
           <h1>{this.state.thanksMessage}</h1>
           </div>
        )
    }
}

export default LearnStates;