import React from 'react';
// eslint-disable-next-line no-unused-vars
import MakeOperations from './components/calculator.js';
import './App.css';

class App extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="App">
        <MakeOperations />
      </div>
    );
  }
}

export default App;
