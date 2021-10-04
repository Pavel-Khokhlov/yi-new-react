import { NavLink } from "react-router-dom";

import useLinks from "../Hooks/useConfig";

import "./Footer.css";

const Footer = () => {
  const { mainLinks } = useLinks();

  return (
    <footer className="footer">
      <ul className="footer__links">
        {mainLinks
          .filter((link) => link.img !== null)
          .map((link) => {
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className="footer__link text-color__black"
              >
                {link.name}
              </NavLink>
            );
          })}
      </ul>
    </footer>
  );
};

export default Footer;
