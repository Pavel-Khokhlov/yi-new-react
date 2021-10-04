import { useContext } from "react";
import { useDispatch } from "react-redux";
import { fetchSubsciber } from "../../store/subscriberSlice";

import { TranslationContext } from "../../context/TranslationContext";

import { useFormWithValidation } from "../Hooks/useForm.jsx";

import Input from "../Input/Input";
import Button from "../Button/Button";

import "./FormSection.css";
import { openUnsubscribePopup } from "../../store/appSlice";

const FormSection = () => {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const translation = useContext(TranslationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSubsciber(values));
    resetForm();
  };

  const handleOpenUnsubscribeForm = (e) => {
    dispatch(openUnsubscribePopup());
  }

  const submitButtonClassName = `button button__submit ${
    isValid ? "button__submit_valid" : "button__submit_invalid"
  }`;

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
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
          {translation.main_form_subscribe}
        </Button>
        <p className="paragraph form__paragraph text-size__paragraph-s">
          {translation.main_form_text_privacy}
        </p>
        <Button
          type="button"
          className="button button__word text-size__paragraph-s"
          onClick={handleOpenUnsubscribeForm}
        >
          {translation.main_form_unsubscribe}
        </Button>
      </div>
    </form>
  );
};

export default FormSection;
