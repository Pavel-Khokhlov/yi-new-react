import { useContext } from "react";
import Button from "../Button/Button";

import "./FormSection.css";

const FormSection = ({
  onSubmit,
  title,
  children,
  sendButtonName,
  privacy,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__container">
        <h2 className="form__title">{title}</h2>
        {children}
        <Button type="submit" className="button button__subscribe form__button">
          {sendButtonName}
        </Button>
        <p className="form__privacy">{privacy}</p>
      </div>
    </form>
  );
};

export default FormSection;
