import { useContext } from "react";
import { NavLink } from "react-router-dom";

//import { mainLinks } from "../../utils/config";

import { TranslationContext } from "../../context/TranslationContext";

import Foto from "../../images/cool_casual_02.jpg";

import "./PageMain.css";

const PageMain = () => {
  const translation = useContext(TranslationContext);
  const mainLinks = [
    {
      name: translation.main_collection,
      img: Foto,
      path: `/collection`,
    },
    {
      name: translation.main_bags,
      img: Foto,
      path: `/bags`,
    },
    {
      name: translation.main_accessorize,
      img: Foto,
      path: `/accessorize`,
    },
    {
      name: translation.main_bijouterie,
      img: Foto,
      path: `/bijouterie`,
    },
  ];
  return (
    <section className="section">
      <ul className="main__links">
        {mainLinks.map((link) => {
          return (
            <NavLink key={link.path} to={link.path} className="main__link">
              <img src={link.img} alt="фотография" className="main__img" />
              <p className="paragraph paragraph__link text-color__white text-size__main-link">
                {link.name}
              </p>
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
};

export default PageMain;
