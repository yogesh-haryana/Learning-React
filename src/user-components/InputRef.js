import React, { Component } from 'react'
import Input from './Input'

class InputRef extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }
    clickHandler =()=>{
        this.componentRef.current.FocusInput()
    }
  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default InputRef