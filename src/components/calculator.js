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

  // The render function
  render() {
    // Our buttons name list
    const buttons = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    const { next, operation, total } = this.state;
    let result = '';

    /* If the operation is not empty, we will show the operation
     * and the total of the operation in the screen
    */
    if (total) {
      result = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      result = next;
    }
    return (
      <div>
        <ul>
          <li className="screen">{result}</li>
          <li>
          {buttons.map((btn) => (<button key={btn} className = 'pad' className={function giveClass(btn) {
            if (btn === '+' || btn === 'x' || btn === '-' || btn === '/' || btn === '=') {
              return 'different';
            }
            if (btn === '0') {
              return 'zero';
            }
            return '';
          }}
          onClick={this.eventHandler}
          type="button">{btn}</button>))}
          </li>
        </ul>
      </div>
    );
  }
}
