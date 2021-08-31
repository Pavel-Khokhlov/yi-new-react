import { useState, useEffect } from "react";

import "./Input.css";

const Input = ({
  labelName,
  inputName,
  type,
  onChange,
  value,
  errors,
  formDisabled,
}) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = (e) => {
    setFocus(true);
  };
  const handleBlur = (e) => {
    setFocus(false);
  };

  const labelClassName = `paragraph paragraph__label paragraph__color_grey input__label ${focus ? "input__label_focus" : "input__label_blur"}` 
  return (
    <label className="input">
      <p className={labelClassName}>
        {labelName}
      </p>
      <input
        type={type}
        name={inputName}
        id={inputName}
        className="input__field"
        onChange={onChange}
        value={value || ""}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={formDisabled}
        required
      />
      <p className="input__error">{errors}</p>
    </label>
  );
};

export default Input;
