/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React from 'react';

function Pad() {
  return (
    <div>
      <ul>
        <li className="screen"><input className="" type="text" placeholder="0" /></li>
        <li className="pad same"><button type="submit">AC</button></li>
        <li className="pad same"><button type="submit">+/-</button></li>
        <li className="pad same"><button type="submit">%</button></li>
        <li className="pad different"><button type="submit">+</button></li>
        <li className="pad same"><button type="submit">7</button></li>
        <li className="pad same"><button type="submit">8</button></li>
        <li className="pad same"><button type="submit">9</button></li>
        <li className="pad different"><button type="submit">*</button></li>
        <li className="pad same"><button type="submit">4</button></li>
        <li className="pad same"><button type="submit">5</button></li>
        <li className="pad same"><button type="submit">6</button></li>
        <li className="pad different"><button type="submit">-</button></li>
        <li className="pad same"><button type="submit">1</button></li>
        <li className="pad same"><button type="submit">2</button></li>
        <li className="pad same"><button type="submit">3</button></li>
        <li className="pad different"><button type="submit">/</button></li>
        <li className="pad same zero"><button type="submit">0</button></li>
        <li className="pad same"><button type="submit">.</button></li>
        <li className="pad different"><button type="submit">=</button></li>
      </ul>
    </div>
  );
}

class Component extends React.Component {
  render() {
    return (
      <Pad />
    );
  }
}
export default Component;
