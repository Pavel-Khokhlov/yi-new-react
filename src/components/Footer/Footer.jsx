import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { TranslationContext } from "../../context/TranslationContext";

import "./Footer.css";

const Footer = () => {
  const translation = useContext(TranslationContext);
  const mainLinks = [
    {
      name: translation.main_collection,
      path: `/collection`,
    },
    {
      name: translation.main_bags,
      path: `/bags`,
    },
    {
      name: translation.main_accessorize,
      path: `/accessorize`,
    },
    {
      name: translation.main_bijouterie,
      path: `/bijouterie`,
    },
  ];
  return (
    <footer className="footer">
      <ul className="footer__links">
        {mainLinks.map((link) => {
          return (
            <NavLink key={link.path} to={link.path} className="footer__link text-color__black">
              {link.name}
            </NavLink>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
