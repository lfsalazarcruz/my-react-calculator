import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      prev: null,
      adding: false,
    }
  }

  clearCalculator = () => {
    console.log("Clearing calculator...");
    this.setState({
      current: 0,
      prev: 0,
      adding: false
    });
  }

  setNumber0 = () => {
    console.log("Setting number 0");
    if(this.state.adding === true) {
      this.setState({
        current: 0
      });
    }
    else if(this.state.adding === false && this.state.current !== null) {
      let digits = this.state.current.toString() + 0;
      this.setState({
        current: parseInt(digits, 10),
      });
    } else {
      this.setState({
        current: 0
      });
    }
  }

  setNumber1 = () => {
    console.log("Setting number 1");
    if(this.state.adding === true) {
      this.setState({
        current: 1
      });
    }
    else if(this.state.adding === false && this.state.current !== null) {
      let digits = this.state.current.toString() + 1;
      this.setState({
        current: parseInt(digits, 10)
      });
    } else {
      this.setState({
        current: 1
      });
    }
  }

  setNumber2 = () => {
    console.log("Setting number 2");
    if(this.state.adding === true) {
      this.setState({
        current: 2
      });
    }
    else if(this.state.adding === false && this.state.current !== null) {
      let digits = this.state.current.toString() + 2;
      this.setState({
        current: parseInt(digits, 10)
      });
    } else {
      this.setState({
        current: 2
      });
    }
  }

  setNumber3 = () => {
    console.log("Setting number 3");
    if(this.state.adding === true) {
      this.setState({
        current: 3
      });
    }
    else if(this.state.adding === false && this.state.current !== null) {
      let digits = this.state.current.toString() + 3;
      this.setState({
        current: parseInt(digits, 10)
      });
    } else {
      this.setState({
        current: 3
      });
    }
  }

  setNumber4 = () => {
    console.log("Setting number 4");
    if(this.state.adding === true) {
      this.setState({
        current: 4
      });
    }
    else if(this.state.adding === false && this.state.current !== null) {
      let digits = this.state.current.toString() + 4;
      this.setState({
        current: parseInt(digits, 10)
      });
    } else {
      this.setState({
        current: 4
      });
    }
  }

  setNumber5 = () => {
    console.log("Setting number 5");
    if(this.state.adding === true) {
      this.setState({
        current: 5
      });
    }
    else if(this.state.adding === false && this.state.current !== null) {
      let digits = this.state.current.toString() + 5;
      this.setState({
        current: parseInt(digits, 10)
      });
    } else {
      this.setState({
        current: 5
      });
    }
  }

  setNumber6 = () => {
    console.log("Setting number 6");
    if(this.state.adding === true) {
      this.setState({
        current: 6
      });
    }
    else if(this.state.adding === false && this.state.current !== null) {
      let digits = this.state.current.toString() + 6;
      this.setState({
        current: parseInt(digits, 10)
      });
    } else {
      this.setState({
        current: 6
      });
    }
  }

  setNumber7 = () => {
    console.log("Setting number 7");
    if(this.state.adding === true) {
      this.setState({
        current: 7
      });
    }
    else if(this.state.adding === false && this.state.current !== null) {
      let digits = this.state.current.toString() + 7;
      this.setState({
        current: parseInt(digits, 10)
      });
    } else {
      this.setState({
        current: 7
      });
    }
  }

  setNumber8 = () => {
    console.log("Setting number 8");
    if(this.state.adding === true) {
      this.setState({
        current: 8
      });
    }
    else if(this.state.adding === false && this.state.current !== null) {
      let digits = this.state.current.toString() + 8;
      this.setState({
        current: parseInt(digits, 10)
      });
    } else {
      this.setState({
        current: 8
      });
    }
  }

  setNumber9 = () => {
    console.log("Setting number 9");
    if(this.state.adding === true) {
      this.setState({
        current: 9
      });
    }
    else if(this.state.adding === false && this.state.current !== null) {
      let digits = this.state.current.toString() + 9;
      this.setState({
        current: parseInt(digits, 10)
      });
    } else {
      this.setState({
        current: 9
      });
    }
  }

  addNumbers = () => {
    if(this.state.prev !== null || this.state.current !== 0) {
      this.setState({
        adding: true,
        prev: this.state.current,
      });
    } else {
      this.setState({
        adding: false,
      })
    }
  }

  resolveEquation = () => {
    if (this.state.adding === true) {
      let sum = this.state.prev + this.state.current;
      this.setState({
        current: sum,
        prev: 0,
        adding: false
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calculator-output">
          <p className="output-text">{this.state.current}</p>
        </div>
        <div className="calculator-row">
          <button onClick={this.clearCalculator} className="custom-button">C</button>
          <button className="custom-button">+/-</button>
          <button className="custom-button">%</button>
          <button className="custom-button">÷</button>
        </div>
        <div className="calculator-row">
          <button onClick={this.setNumber7} className="custom-button">7</button>
          <button onClick={this.setNumber8} className="custom-button">8</button>
          <button onClick={this.setNumber9} className="custom-button">9</button>
          <button className="custom-button">x</button>
        </div>
        <div className="calculator-row">
          <button onClick={this.setNumber4} className="custom-button">4</button>
          <button onClick={this.setNumber5} className="custom-button">5</button>
          <button onClick={this.setNumber6} className="custom-button">6</button>
          <button className="custom-button">-</button>
        </div>
        <div className="calculator-row">
          <button onClick={this.setNumber1} className="custom-button">1</button>
          <button onClick={this.setNumber2} className="custom-button">2</button>
          <button onClick={this.setNumber3} className="custom-button">3</button>
          <button onClick={this.addNumbers} className="custom-button">+</button>
        </div>
        <div className="calculator-row">
          <button onClick={this.setNumber0} className="custom-button-2">0</button>
          <button className="custom-button">.</button>
          <button onClick={this.resolveEquation} className="custom-button">=</button>
        </div>
      </div>
    );
  }
}

export default App;
