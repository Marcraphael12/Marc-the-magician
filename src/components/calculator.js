import { useState } from 'react';
import calculate from './logic/calculate';

export default function MakeOperations() {
  // res for result as we already have a variable called result in the calculator.js file
  const [res, setResult] = useState({});

  const eventhandler = (e) => {
    const b = e.target.textContent;
    const calc = calculate(res, b);
    setResult(calc);
  };

  const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x',
    '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const { next, total, operation } = res;
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
    <div className="calc">
      <h2>Let's do some math</h2>
      <ul>
        <li className='screen'>
            <h3>
              {result}
            </h3>
          </li>
          {buttons.map((btn) => (<li className={`pad ${addClass(btn)}`} key={btn}><button key={btn} onClick={eventhandler} type="button">{btn}</button></li>))}
      </ul>
    </div>
  );
}
