import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

import AccountPng from '../../images/account_white.png';
import BasketPng from '../../images/basket_white.png';

import "./Header.css";

const Header = ({ onOpenMenuClick }) => {
  const newHeader = false;
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log('scrolled')
    }
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    }
  }, [lastYPos])

  return (
    <header className="header">
      <div className="header__menu">
        <Button type="button" className="button button__menu button__menu_header" onClick={onOpenMenuClick} />
      </div>
      <nav className="header__nav">
        <NavLink to="/">
          <img
            src={AccountPng}
            alt="иконка аккаунт"
            className="button header__icon"
          />
        </NavLink>
        <NavLink to="/">
          <img
            src={BasketPng}
            alt="иконка корзина"
            className="button header__icon"
          />
        </NavLink>
      </nav>
      <Logo />
    </header>
  );
};

export default Header;
