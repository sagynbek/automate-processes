import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">Home</Link>
      <Link to="/text-into-paragraph">Convert text into paragraph</Link>
    </header>
  );
}

export default Header;
