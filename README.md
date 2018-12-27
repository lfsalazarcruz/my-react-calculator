# Dash-board

I started this project thinking in recreating a calculator fully functional. After getting that done, I decided to replicate part of Apple's dashboard with the idea of also recreating the Weather app. 

The UI should display the main apps (calculator and weather app) and these need to be fully functional.

Created with React.js: https://reactjs.org/.
I'm replicating Apple's dashboard from Apple's Macbook Pro.

1.- React-Calculator: Created with React.
2.- react-draggable: For the calculator to be draggable, I used the react-draggable package https://www.npmjs.com/package/react-draggable. 

Below is a sample of my code of how I used the <Draggable> component.
    
import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './App.css';
import Calculator from './Components/Calculator';

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
          <div className="handle">
            <Calculator/>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default App;
