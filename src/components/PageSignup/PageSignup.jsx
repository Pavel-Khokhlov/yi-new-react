import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { TranslationContext } from "../../context/TranslationContext";
import { createUser } from "../../store/userSlice";
import Button from "../Button/Button";
import Form from "../Form/Form";
import { useFormWithValidation } from "../Hooks/useForm";
import Input from "../Input/Input";

import "./PageSignup.css";

const PageSignup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const translation = useContext(TranslationContext);
  const { currentUser, status } = useSelector((state) => state.users);
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();
  const submitButtonClassName = `button button__submit ${
    isValid ? "button__submit_valid" : "button__submit_invalid"
  }`;

  useEffect(() => {
    resetForm();
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(values));
    if(status === true) history.push("/signin");
  };
  return (
    <section className="section section__signin">
      <Form title={translation.form_signup_title} onSubmit={handleSubmit}>
        <Input
          type="text"
          inputName="name"
          labelName={translation.main_form_labelname}
          value={values.name || ""}
          onChange={handleChange}
          errors={errors.name}
          minLength="2"
        />
        <Input
          type="text"
          inputName="lastname"
          labelName={translation.main_form_labellastname}
          value={values.lastname || ""}
          onChange={handleChange}
          errors={errors.lastname}
          minLength="2"
        />
        <Input
          type="number"
          inputName="phone"
          labelName={translation.main_form_labelphone}
          value={values.phone || ""}
          onChange={handleChange}
          errors={errors.phone}
          minLength="10"
        />
        <Input
          type="email"
          inputName="email"
          labelName={translation.main_form_labelemail}
          value={values.email || ""}
          onChange={handleChange}
          errors={errors.email}
        />
        <Input
          type="password"
          inputName="password1"
          labelName={translation.main_form_labelpassword1}
          value={values.password1 || ""}
          onChange={handleChange}
          errors={errors.password1}
          minLength="8"
        />
        <Input
          type="password"
          inputName="password2"
          labelName={translation.main_form_labelpassword2}
          value={values.password2 || ""}
          onChange={handleChange}
          errors={errors.password2}
          minLength="8"
        />
        <Button
          isValid={!isValid}
          type="submit"
          className={submitButtonClassName}
        >
          {translation.form_submit_signup}
        </Button>
      </Form>
      <NavLink to="/signin" className="button text-size__paragraph_m">
        {translation.signin_linksignin}
      </NavLink>
    </section>
  );
};

export default PageSignup;
