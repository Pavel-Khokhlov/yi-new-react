import "./Button.css";

const Button = ({ type, className, onClick, children, isValid }) => {
  return (
    <button disabled={isValid} type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
