/* eslint-disable no-unused-vars */
import { Switch, Route } from 'react-router-dom';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import MakeOperations from './components/calculator';
import Header from './components/Header';
import Quote from './components/Quote';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/calculator">
            <MakeOperations />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
