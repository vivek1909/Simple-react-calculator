import React, { Component } from 'react'
import './App.css'
import Result from './components/Result'
import Keypad from './components/Keypad'

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = (button) => {
    if(button === "=") {
      this.calculate();
    }

    else if(button === "C") {
      this.reset();
    }

    else if(button === "CE") {
      this.backspace();
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    }
    catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div className="main-div">
        <div className="calculator-body">
          <h1 className="heading">Simple Calculator</h1>
          <Result result = {this.state.result}/>
          <Keypad onClick={this.onClick}/>
          <p className="footer">Crafted with ♥ by <a href="https://www.linkedin.com/in/vivek-mittal/">Vivek Mittal</a></p>
        </div>
      </div>
    )
  }
}

export default App;