import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  // console.log(location.pathname.substring(1));

  return (
    <div className="header">
      <div className="header__logo-block">
        <img src="img/teddy-bear-logo.svg" width={30} height={30} alt="LOGO" className="logo-img" />
        <h1 className="logo">LOGO</h1>
      </div>
      <ul className="header__menu">
        <li className="header__menu-item">
          <Link
            className={
              location.pathname.substring(1) === ''
                ? 'header__menu-item-link header__menu-item--active'
                : 'header__menu-item-link'
            }
            to={'/'}
          >
            HOME
          </Link>
        </li>
        <li className="header__menu-item">
          <Link
            className={
              location.pathname.substring(1) === 'async'
                ? 'header__menu-item-link header__menu-item--active'
                : 'header__menu-item-link'
            }
            to={'/async'}
          >
            ASYNC
          </Link>
        </li>
        <li className="header__menu-item">
          <Link
            className={
              location.pathname.substring(1) === 'middlewares'
                ? 'header__menu-item-link header__menu-item--active'
                : 'header__menu-item-link'
            }
            to={'/middlewares'}
          >
            MIDDLEWARES
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
