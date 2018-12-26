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
        <div className="calculator-output">{this.state.current}</div>
        <div className="calculator-row">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
        </div>
        <div className="calculator-row">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div className="calculator-row">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        {/* <button>÷</button> */}
        <div className="calculator-row">
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    );
  }
}

export default App;
