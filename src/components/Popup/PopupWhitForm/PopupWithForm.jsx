import Button from "../../Button/Button";

import "../Popup.css";

const PopupWithForm = ({ title, children, onClose, onSubmit, isOpen }) => {

  const popupClassName = `popup ${isOpen ? "popup_opened" : "popup_closed"}`;

  const popupContainerClassName = `popup__container ${isOpen ? "popup__container_opened" : "popup__container_closed"}`;

  return (
    <section className={popupClassName} onClick={onClose}>
      <form
        className={popupContainerClassName}
        onSubmit={onSubmit}
        method="post"
        noValidate
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          type="button"
          className="button button__close-popup"
          onClick={onClose}
        />
        <h2 className="title form__title">{title}</h2>
        {children}
      </form>
    </section>
  );
};

export default PopupWithForm;
