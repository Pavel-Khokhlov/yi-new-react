import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { TranslationContext } from "../../context/TranslationContext";

import LogoPng from "../../images/logo_black.png";
import InstagramPng from "../../images/insta_black.png";
import TelegramPng from "../../images/telegram_black.png";
import Button from "../Button/Button";

import "./PopupMenu.css";

const PopupMenu = ({ isOpen, onCloseMenuClick, onEngClick, onRusClick }) => {
  const translation = useContext(TranslationContext);

  const popupMenuClassName = `popup-menu ${
    isOpen ? "popup-menu_opened" : "popup-menu_closed"
  }`;

  return (
    <section className={popupMenuClassName}>
      <Button
        type="button"
        className="button button__close-popup"
        onClick={onCloseMenuClick}
      />
      <NavLink to="/">
        <img
          src={LogoPng}
          alt="логотип"
          className="button logo logo__menu"
          onClick={onCloseMenuClick}
        />
      </NavLink>
      <p className="paragraph paragraph__menu">{translation.menu_moscow}</p>
      <nav className="popup-menu__links">
        <NavLink
          to="/collection"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_collection}
        </NavLink>
        <NavLink
          to="/new"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_new}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_all}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_leather}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_exclusive}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_outwear}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_jumpsuits}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_dresses}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_jackets_shirts}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_tops}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_knitted}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_trousers}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_bags}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_accessorize}
        </NavLink>
        <NavLink
          to="/"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_bijouterie}
        </NavLink>
        <NavLink
          to="/sale"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_sale}
        </NavLink>
        <NavLink
          to="/about"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_about}
        </NavLink>
        <NavLink
          to="/pay"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_pay}
        </NavLink>
        <NavLink
          to="/waiting-list"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_wait}
        </NavLink>
        <NavLink
          to="/refunds"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_refunds}
        </NavLink>
        <NavLink
          to="/contacts"
          className="paragraph__menu popup-menu__link"
          onClick={onCloseMenuClick}
        >
          {translation.menu_contacts}
        </NavLink>
        <Button
          type="button"
          className="button button__back paragraph__menu"
          onClick={onCloseMenuClick}
        >
          {translation.menu_back}
        </Button>
      </nav>
      <div className="popup-menu__lang">
        <Button
          type="button"
          className="button button__lang paragraph__menu"
          onClick={onEngClick}
        >
          {translation.menu_en}
        </Button>
        <p>|</p>
        <Button
          type="button"
          className="button button__lang paragraph__menu"
          onClick={onRusClick}
        >
          {translation.menu_ru}
        </Button>
      </div>
      <div className="popup-menu__social">
        <NavLink
          to="https://www.instagram.com/irinayuzifovich/"
          className="popup-menu__link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={InstagramPng}
            alt="иконка инстаграм"
            className="popup-menu__icon"
          />
        </NavLink>
        <NavLink
          to="https://www.instagram.com/irinayuzifovich/"
          className="popup-menu__link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={InstagramPng}
            alt="иконка whatsapp"
            className="popup-menu__icon"
          />
        </NavLink>
        <NavLink to="/" className="popup-menu__link">
          <img
            src={TelegramPng}
            alt="иконка телеграм"
            className="popup-menu__icon"
            target="_blank"
            rel="noreferrer"
          />
        </NavLink>
      </div>
    </section>
  );
};

export default PopupMenu;
