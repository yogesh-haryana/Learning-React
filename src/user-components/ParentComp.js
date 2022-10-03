import React, { Component } from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Yogesh'
      }
    }

    componentDidMount(){
        setInterval(()=>{},2000)
        this.setState({
            name : 'Yogesh'
        })
    }
  render() {
    console.log('parent component rendered')

    return (
      <div>Parent Component
        {/* <RegComp name = {this.state.name}></RegComp> */}
        {/* <PureComp name = {this.state.name}></PureComp> */}
        <Memo/>
      </div>
    )
  }
}

export default ParentComp