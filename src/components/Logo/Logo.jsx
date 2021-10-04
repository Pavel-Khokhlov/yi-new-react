import React from "react";
import { NavLink } from "react-router-dom";

import "./Logo.css";

const Logo = ({ src, className, onClick }) => {
  return (
    <NavLink to="/">
      <img src={src} alt="главный логотип" className={className} onClick={onClick} />
    </NavLink>
  );
};

export default Logo;
