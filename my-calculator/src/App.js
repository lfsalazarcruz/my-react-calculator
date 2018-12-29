import React, { Component } from 'react';
import Draggable from 'react-draggable';

import './App.css';

import Calculator from './Components/Calculator/Calculator';
import WeatherApp from './Components/WeatherApp/WeatherApp';
import CalendarApp from './Components/CalendarApp/CalendarApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[1, 1]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div className="handle calculator-app">
            <Calculator/>
          </div>
        </Draggable>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[1, 1]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
          <div>
            <div className="handle my-weather-app">
          </div>
          <WeatherApp/>
          </div>
        </Draggable>
        <CalendarApp/>
      </div>
    );
  }
}

export default App;
