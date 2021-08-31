import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FormSection from "../FormSection/FormSection";
import Input from "../Input/Input";

import { TranslationContext } from "../../context/TranslationContext";

import CollectionFoto from "../../images/cool_casual_02.jpg";
import BagFoto from "../../images/cindy.jpg";
import AccessorizeFoto from "../../images/accessorize.jpg";
import BijouterieFoto from "../../images/bijouterie.jpg";

import "./PageMain.css";

const PageMain = ({ onSubmit }) => {
  const translation = useContext(TranslationContext);
  const mainLinks = [
    {
      name: translation.main_collection,
      img: CollectionFoto,
      path: `/collection`,
    },
    {
      name: translation.main_bags,
      img: BagFoto,
      path: `/bags`,
    },
    {
      name: translation.main_accessorize,
      img: AccessorizeFoto,
      path: `/accessorize`,
    },
    {
      name: translation.main_bijouterie,
      img: BijouterieFoto,
      path: `/bijouterie`,
    },
  ];
  return (
    <>
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
      <FormSection
        onSubmit={onSubmit}
        sendButtonName={translation.main_form_button}
        privacy={translation.main_form_privacy}
        title={translation.main_form_title}
      >
        <Input
          type="text"
          inputName="name"
          labelName={translation.main_form_labelname}
        />
        <Input
          type="email"
          inputName="email"
          labelName={translation.main_form_labelemail}
        />
      </FormSection>
    </>
  );
};

export default PageMain;
