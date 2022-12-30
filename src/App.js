
import React, { Component } from 'react'
import Users from './Users'
import { ThemeContext } from './Context'
export default class extends Component {

  constructor() {
    super()
    this.state = {
      theme: "no theme applied"
    }
  }
  render() {
    return (
      <div className="App">
        <h2>app .js</h2>
        <button onClick={() => { this.setState({ theme: "blue " }) }}>change</button>
        <ThemeContext.Provider value={this.state.theme}>
          <Users />
        </ThemeContext.Provider>
      </div>
    );
  }
}
