import { NavLink } from "react-router-dom";
import FormSection from "../FormSection/FormSection";

import useLinks from "../Hooks/useConfig";

import "./PageMain.css";

const PageMain = () => {
  const { mainLinks } = useLinks();
  
  return (
    <>
      <section className="section">
        <ul className="main__links">
          {mainLinks
            .filter((link) => link.img !== null)
            .map((link) => {
              return (
                <NavLink key={link.path} to={link.path} className="main__link">
                  <img src={link.img} alt="фотография" className="main__img" />
                  <span className="main__overlay"></span>
                  <p className="title title__main text-color__white text-size__title_m">
                    {link.name}
                  </p>
                </NavLink>
              );
            })}
        </ul>
      </section>
      <FormSection />
    </>
  );
};

export default PageMain;
