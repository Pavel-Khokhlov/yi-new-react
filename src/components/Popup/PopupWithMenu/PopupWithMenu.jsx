import { useContext } from "react";
import { NavLink } from "react-router-dom";
import useLinks from "../../Hooks/useConfig";

import { TranslationContext } from "../../../context/TranslationContext";

import Logo from "../../Logo/Logo";
import LogoPng from "../../../images/logo_black.png";
import Button from "../../Button/Button";

import "./PopupWithMenu.css";

const PopupWithMenu = ({ isOpen, onClose, onEngClick, onRusClick }) => {
  const { mainLinks, socialLinks } = useLinks();
  const translation = useContext(TranslationContext);

  const popupMenuClassName = `popup-menu ${
    isOpen ? "popup-menu_opened" : "popup-menu_closed"
  }`;

  return (
    <section className={popupMenuClassName}>
      <Button
        type="button"
        className="button button__close-menu"
        onClick={onClose}
      />
      <Logo
        src={LogoPng}
        className="button logo logo__menu"
        onClick={onClose}
      />
      <h2 className="title title__menu">{translation.menu_moscow}</h2>
      <ul className="popup-menu__links">
        {mainLinks.map((link) => {
          return (
            <NavLink
              key={link.path}
              to={link.path}
              className="subtitle__menu popup-menu__link text-size__subtitle_m"
              activeClassName="subtitle__menu_active"
              onClick={onClose}
            >
              {link.name}
            </NavLink>
          );
        })}
        <Button
          type="button"
          className="button button__word paragraph__menu"
          onClick={onClose}
        >
          {translation.menu_back}
        </Button>
      </ul>
      <div className="popup-menu__lang">
        <Button
          type="button"
          className="button button__word paragraph__menu"
          onClick={onEngClick}
        >
          {translation.menu_en}
        </Button>
        <p>|</p>
        <Button
          type="button"
          className="button button__word paragraph__menu"
          onClick={onRusClick}
        >
          {translation.menu_ru}
        </Button>
      </div>
      <ul className="popup-menu__social">
        {socialLinks.map((link) => {
          return (
            <NavLink
              key={link.path}
              to={link.path}
              className="popup-menu__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={link.icon}
                alt={link.alt}
                className="popup-menu__icon"
              />
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
};

export default PopupWithMenu;
