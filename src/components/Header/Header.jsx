import React, { useState, useEffect } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

import LogoWhite from "../../images/logo_white.png";
import LogoBlack from "../../images/logo_black.png";
import AccountWhite from "../../images/account_white.png";
import AccountBlack from "../../images/account_black.png";
import LikeWhite from "../../images/like_white.png";
import LikeBlack from "../../images/like_black.png";
import BasketWhite from "../../images/basket_white.png";
import BasketBlack from "../../images/basket_black.png";

import "./Header.css";

const Header = ({ onMenuClick }) => {
  const [lastYPos, setLastYPos] = useState(0);
  const [headerClassName, setHeaderClassName] = useState(`header`);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      if (scrollPosition < 10) {
        setHeaderClassName(`header`);
      } else {
        setHeaderClassName(`header header__scrolled`);
      }
    };
    window.addEventListener("scroll", handleScroll, false);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);

  const { currentPath } = useSelector(
    (state) => state.app
  );

  const LogoPNG = currentPath === "/" ? LogoWhite : LogoBlack;
  const AccountPNG = currentPath === "/" ? AccountWhite : AccountBlack;
  const LikePNG = currentPath === "/" ? LikeWhite : LikeBlack;
  const BasketPNG = currentPath === "/" ? BasketWhite : BasketBlack;

  const menuButtonClassName = `button button__menu ${currentPath === "/" ? "button__menu_main" : "button__menu_other"}`;

  return (
    <header className={headerClassName}>
      <nav className="header__nav">
        <Button
          type="button"
          className={menuButtonClassName}
          onClick={onMenuClick}
        />
        <Logo src={LogoPNG} className="button logo logo__header" />
        <ul className="header__links">
          <NavLink to="/signin">
            <img
              src={AccountPNG}
              alt="иконка аккаунт"
              className="button header__icon"
            />
          </NavLink>
          <NavLink to="/">
            <img
              src={LikePNG}
              alt="иконка избранных"
              className="button header__icon"
            />
          </NavLink>
          <NavLink to="/basket">
            <img
              src={BasketPNG}
              alt="иконка корзина"
              className="button header__icon"
            />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
