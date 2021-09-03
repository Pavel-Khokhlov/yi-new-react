import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { TranslationContext } from "../../context/TranslationContext";

import LogoPng from "../../images/logo_black.png";
import InstagramPng from "../../images/instagram2.png";
import WhatsappPng from "../../images/whatsapp2.png";
import TelegramPng from "../../images/telegram2.png";
import GmailPng from "../../images/gmail2.png";
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
      <h2 className="title title__menu">{translation.menu_moscow}</h2>
      <nav className="popup-menu__links">
        <NavLink
          to="/collection"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_collection}
        </NavLink>
        <NavLink
          to="/new"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_new}
        </NavLink>
        <NavLink
          to="/all"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_all}
        </NavLink>
        <NavLink
          to="/leather"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_leather}
        </NavLink>
        <NavLink
          to="/exclusive"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_exclusive}
        </NavLink>
        <NavLink
          to="/outwear"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_outwear}
        </NavLink>
        <NavLink
          to="/jumpsuits"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_jumpsuits}
        </NavLink>
        <NavLink
          to="/dresses"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_dresses}
        </NavLink>
        <NavLink
          to="/jackets"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_jackets_shirts}
        </NavLink>
        <NavLink
          to="/tops"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_tops}
        </NavLink>
        <NavLink
          to="/knitted"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_knitted}
        </NavLink>
        <NavLink
          to="/trousers"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_trousers}
        </NavLink>
        <NavLink
          to="/bags"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_bags}
        </NavLink>
        <NavLink
          to="/accessorize"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_accessorize}
        </NavLink>
        <NavLink
          to="/bijouterie"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_bijouterie}
        </NavLink>
        <NavLink
          to="/sale"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_sale}
        </NavLink>
        <NavLink
          to="/about"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_about}
        </NavLink>
        <NavLink
          to="/pay"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_pay}
        </NavLink>
        <NavLink
          to="/waiting-list"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_wait}
        </NavLink>
        <NavLink
          to="/refunds"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
          onClick={onCloseMenuClick}
        >
          {translation.menu_refunds}
        </NavLink>
        <NavLink
          to="/contacts"
          className="subtitle__menu popup-menu__link text-size__subtitle_m"
          activeClassName="subtitle__menu_active"
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
            src={WhatsappPng}
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
        <NavLink to="/" className="popup-menu__link">
          <img
            src={GmailPng}
            alt="иконка gmail"
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
