import React from "react";
import { NavLink } from "react-router-dom";

import LogoPng from "../../images/logo_white.png";

import "./Logo.css";

const Logo = () => {
  return (
    <NavLink to="/" className="logo__header" >
      <img src={LogoPng} alt="логотип" className="button logo" aria-label="IRINA YUZIFOVICH"/>
    </NavLink>
  );
};

export default Logo;
