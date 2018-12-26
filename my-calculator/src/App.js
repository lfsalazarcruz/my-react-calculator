import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
    }
  }
  render() {
    return (
      <div className="App">
        <div className="calculator-output">
          <p className="output-text">{this.state.current}</p>
        </div>
        <div className="calculator-row">
          <button className="custom-button">C</button>
          <button className="custom-button">+/-</button>
          <button className="custom-button">%</button>
          <button className="custom-button">÷</button>
        </div>
        <div className="calculator-row">
          <button className="custom-button">7</button>
          <button className="custom-button">8</button>
          <button className="custom-button">9</button>
          <button className="custom-button">x</button>
        </div>
        <div className="calculator-row">
          <button className="custom-button">4</button>
          <button className="custom-button">5</button>
          <button className="custom-button">6</button>
          <button className="custom-button">-</button>
        </div>
        <div className="calculator-row">
          <button className="custom-button">1</button>
          <button className="custom-button">2</button>
          <button className="custom-button">3</button>
          <button className="custom-button">+</button>
        </div>
        <div className="calculator-row">
          <button className="custom-button-2">0</button>
          <button className="custom-button">.</button>
          <button className="custom-button">=</button>
        </div>
      </div>
    );
  }
}

export default App;
