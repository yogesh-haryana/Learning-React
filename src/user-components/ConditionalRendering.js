import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Yogesh</div>

        //     )
        // }
        // else {
        //     return (
        //         <div> Welcome Guest</div>
        //     )


        // }

        // ---------------------------
        // let message;
        // if (this.state.isLoggedIn) {
        //     return (
        //         message = <div>Welcome Yogesh</div>

        //     )
        // }
        // else {
        //     return (
        //         message = <div>Welcome Guest</div>

        //     )
        // }




        //       using ternery operator 

        return (
            this.state.isLoggedIn ?
                (<div>Welcome Yogesh</div>) :
                (<div>Welcome Guest</div>)
        )

        //   using short - circuit approach
        // return (
        //     (this.state.isLoggedIn && <div>Welcome Yogesh</div>)
        // )
    }
}

export default ConditionalRendering;