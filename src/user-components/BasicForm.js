import React, { Component } from 'react'

class BasicForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      email: '',
      subject: 'React'
    }
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    })
  }
  handleEmailChange = event=> {
    this.setState({
      email: event.target.value
    })
  }
  handleSelectChange = event => {
    this.setState({
      subject: event.target.value
    })
  }
  onFormSubmit() {
    alert(`${this.state.username}  is registered with ${this.state.email} email account in the course of ${this.state.subject}`);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>Enter UserName : </label>
          <input type="text"
            value={this.state.username}
            onChange={this.handleChange}>
          </input>
        </div>

        <div>
          <label>Enter Email : </label>
          <input type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}>
          </input>
        </div>

        <div>
          <label>Select Subject : </label>
          <select
            value={this.state.subject}
            onChange={this.handleSelectChange}>
            <option >React</option>
            <option >Angular</option>
            <option >Vue</option>
          </select>
        </div>

        <button type='submit'>submit</button>

      </form>
    )
  }
}

export default BasicForm