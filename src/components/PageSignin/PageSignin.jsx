import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TranslationContext } from "../../context/TranslationContext";

import { useFormWithValidation } from "../Hooks/useForm.jsx";

import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";

import "./PageSignin.css";

const PageSignin = () => {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const translation = useContext(TranslationContext);

  const dispatch = useDispatch();

  const submitButtonClassName = `button button__submit ${
    isValid ? "button__submit_valid" : "button__submit_invalid"
  }`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    //newSubscriber();
  };

  return (
    <section className="section section__signin">
      <Form title={translation.form_signin_title} onSubmit={handleSubmit}>
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
          {translation.form_submit_signin}
        </Button>
      </Form>
      <NavLink
        to="/signup"
        className="button text-size__paragraph_m"
      >
        {translation.signin_linksignup}
      </NavLink>
    </section>
  );
};

export default PageSignin;
