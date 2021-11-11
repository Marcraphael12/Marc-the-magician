/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => (
    <header className="header">
      <h1>Marc the magician</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/calculator">calculator</Link>
        <Link to="/Quote">Quote</Link>
      </div>
    </header>
);

export default Header;