import "./Form.css";

const Form = ({ title, children, onSubmit }) => {
  return (
    <div className="section">
      <form onSubmit={onSubmit} className="form" noValidate>
        <div className="form__container">
          <h2 className="title form__title text-size__title_m">{title}</h2>
          {children}
        </div>
      </form>
    </div>
  );
};

export default Form;
