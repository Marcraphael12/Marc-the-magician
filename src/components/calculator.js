/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';
import calculate from './logic/calculate.js';

// Create an obect to make every operations
export default class MakeOperation extends React.Component {
  constructor(props) {
    super(props);

    // Create a state to store the value of the input
    this.state = {};
  }

  // Function to make the operation
  eventHandler(event) {
    // Get the button value when the user click
    const btn = event.target.value;

    // Does the operation
    const operation = calculate(this.state, btn);
    this.setState(operation);
  }
}
