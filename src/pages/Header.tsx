import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__logo-block">
        <h1 className="logo">LO</h1>
        <h1 className="logo">GO</h1>
      </div>
      <ul className="header__menu">
        <li className="header__menu-item">
          <Link className="header__menu-item-link" to={'/'}>
            HOME
          </Link>
        </li>
        <li className="header__menu-item">
          <Link className="header__menu-item-link" to={'/base'}>
            BASE
          </Link>
        </li>
        <li className="header__menu-item">
          <Link className="header__menu-item-link" to={'/about'}>
            ABOUT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
