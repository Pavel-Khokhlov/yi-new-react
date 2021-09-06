import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addSubscriber } from "../../store/subscriberSlice";

import { TranslationContext } from "../../context/TranslationContext";

import { useFormWithValidation } from "../Hooks/useForm.jsx";

import Input from "../Input/Input";
import Button from "../Button/Button";

import "./FormSection.css";

const FormSection = () => {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const translation = useContext(TranslationContext);

  const dispatch = useDispatch();

  const newSubscriber = () => {
    dispatch(addSubscriber(values));
    resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newSubscriber();
  };

  const submitButtonClassName = `button button__subscribe ${
    isValid ? "button__subscribe_valid" : "button__subscribe_invalid"
  }`;

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__container">
        <h2 className="title form__title">{translation.main_form_title}</h2>
        <p className="paragraph form__paragraph text-size__paragraph-s">
          {translation.main_form_paragraph}
        </p>
        <Input
          type="text"
          inputName="name"
          labelName={translation.main_form_labelname}
          value={values.name || ""}
          onChange={handleChange}
          errors={errors.name}
          minLength='2'
        />
        <Input
          type="email"
          inputName="email"
          labelName={translation.main_form_labelemail}
          value={values.email || ""}
          onChange={handleChange}
          errors={errors.email}
        />
        <Button
          isValid={!isValid}
          type="submit"
          className={submitButtonClassName}
        >
          {translation.main_form_button}
        </Button>
        <p className="paragraph form__paragraph text-size__paragraph-s">
          {translation.main_form_privacy}
        </p>
      </div>
    </form>
  );
};

export default FormSection;
