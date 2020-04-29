import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="App-header">
      {location.pathname !== "/" &&
        <Link to="/">Back</Link>
      }
    </header>
  );
}

export default Header;
