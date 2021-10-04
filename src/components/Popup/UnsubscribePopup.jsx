import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSubscriber } from "../../store/subscriberSlice";
import { closeAllPopups } from "../../store/appSlice";

import { TranslationContext } from "../../context/TranslationContext";

import { useFormWithValidation } from "../Hooks/useForm";
import PopupWithForm from "./PopupWhitForm/PopupWithForm";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { DELAY } from "../../utils/config";

const UnsubscribePopup = () => {
  const dispatch = useDispatch();
  const translation = useContext(TranslationContext);
  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation();

  const { isUnsubscribePopupOpen } = useSelector((state) => state.app);

  const handleClose = () => {
    dispatch(closeAllPopups());
    setTimeout(() => {
      resetForm();
    }, DELAY);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteSubscriber(values));
    handleClose();
  };

  const submitButtonClassName = `button button__submit ${
    isValid ? "button__submit_valid" : "button__submit_invalid"
  }`;

  return (
    <PopupWithForm
      isOpen={isUnsubscribePopupOpen}
      onClose={handleClose}
      title={translation.popup_unsubscribe_title}
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        inputName="email-unsubscribe"
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
        {translation.popup_unsubscribe}
      </Button>
    </PopupWithForm>
  );
};

export default UnsubscribePopup;
