import React, { Component } from 'react'
import Clock from './Clock.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      visible: !this.state.visible,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle Clock</button>
        <div>
          {this.state.visible && <Clock location='New York' offset={-4} />}
        </div>
        <div>{this.state.visible && <Clock location='Kyiv' offset={3} />}</div>
        <div>
          {this.state.visible && <Clock location='London' offset={1} />}
        </div>
      </div>
    )
  }
}

export default App
