import React, { Component } from 'react'

class DestructuringWithClasses extends Component {
      render() {
        const {shortName,fullName} = this.props
        // const {state1, state2} = this.state
    return (
      <div>
        <h2>
            {shortName}'s full Name is {fullName}
        </h2>
      </div>
    )
  }
}

export default DestructuringWithClasses;