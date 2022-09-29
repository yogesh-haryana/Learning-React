import React, { Component } from 'react'

export class ClickFunctionOnClasses extends Component {
    clickHandler = () => {
        console.log('button clicked')
    }
  render() {
    return (
      <div>
                <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default ClickFunctionOnClasses;