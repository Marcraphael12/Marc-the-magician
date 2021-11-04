import React, { useState } from 'react';
import calculate from './logic/calculate.js';

export default function MakeOperations (){
    const [result, setResult] = useState({});

  eventhandler = (e) => {
    const b = e.target.textContent;
    const calc = calculate(result, b);
    setResult(calc);
  };

  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const { next, total, operation } = this.state;
  let result = '';
  if (total) {
    result = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    result = next;
  }

  function addClass(button) {
    if (button === '+' || button === 'x' || button === '-' || button === '÷' || button === '=') {
      return 'different';
    }
    if (button === '0') {
      return 'zero';
    }
    return '';
  }
  return (
    <div>
      <ul>
        <li className='screen'>
            <h3>
              {result}
            </h3>
          </li>
          {buttons.map((btn) => (<li className={`pad ${addClass(btn)}`} key={btn}><button key={btn} onClick={this.eventhandler} type="button">{btn}</button></li>))}
      </ul>
    </div>
  );
}
