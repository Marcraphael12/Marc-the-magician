import React from 'react';
// eslint-disable-next-line no-unused-vars
import Component from './components/calculator.js';
import './App.css';

class App extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="App">
        <Component />
      </div>
    );
  }
}

export default App;
