import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">Home</Link>
      <Link to="/text-into-paragraph">Convert camelCasedText into paragraph (Camel cased text)</Link>
      <Link to="/change-paragraph-case">Change paragraph case (Upper Cased Text -> Upper cased text)</Link>
    </header>
  );
}

export default Header;
