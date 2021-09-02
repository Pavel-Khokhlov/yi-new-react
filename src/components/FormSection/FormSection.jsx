import Button from "../Button/Button";

import "./FormSection.css";

const FormSection = ({
  onSubmit,
  title,
  paragraph,
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
        <h2 className="title form__title">{title}</h2>
        <p className="paragraph form__paragraph text-size__paragraph-s">{paragraph}</p>
        {children}
        <Button type="submit" className="button button__subscribe form__button">
          {sendButtonName}
        </Button>
        <p className="paragraph form__paragraph text-size__paragraph-s">{privacy}</p>
      </div>
    </form>
  );
};

export default FormSection;
