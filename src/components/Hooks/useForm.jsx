import { useState, useCallback, useContext } from "react";

import { TranslationContext } from "../../context/TranslationContext";

import { REG_EMAIL, REG_PASSWORD } from "../../utils/config";

export function useFormWithValidation() {
  const translation = useContext(TranslationContext);
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateMessage = (target) => {
    if (target.name === "name") {
      if (target.value.length === 0) {
        return translation.valid_name_empty;
      }
      if (target.value.length < 2) {
        return translation.valid_name_minlength;
      }
      return "";
    }
    if (target.name === "lastname") {
      if (target.value.length === 0) {
        return "Необходимо ввести имя";
      }
      if (target.value.length < 2) {
        return "Имя должено быть больше 2 символов";
      }
      return "";
    }
    if (target.name === "phone") {
      if (target.value.length === 0) {
        return "Необходимо ввести номер";
      }
      if (target.value.length < 10) {
        return "Номер телефона должен быть не меньше 10 цифр";
      }
      return "";
    }
    if (target.name === "email") {
      if (target.value.length === 0) {
        return translation.valid_email_empty;
      }
      if (!REG_EMAIL.test(target.value)) {
        return translation.valid_email_correct;
      }
      return "";
    }
    if (target.name === "password1") {
      if (target.value.length === 0) {
        return "Необходимо ввести пароль!";
      }
      if (target.value.length < 8) {
        return "Пароль должен быть больше 8 символов!";
      }
      if (!REG_PASSWORD.test(target.value)) {
        return "Пароль должен содержать цифры, символы, строчные и прописные буквы!";
      }
      return "";
    }
    if (target.name === "password2") {
      if (target.value.length === 0) {
        return "Необходимо ввести пароль!";
      }
      if (target.value !== values.password1) {
        return "Пароли не совпадают!";
      }
      return "";
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validateMessage(target) });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors,
    isValid,
    handleChange,
    setValues,
    resetForm,
  };
}
