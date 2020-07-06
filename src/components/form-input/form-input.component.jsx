import React from "react";
import "./form-input.style.scss";

const FormInput = ({ type, name, value, handleChange, label }) => {
  return (
    <div className="group">
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input col-sm-12"
      ></input>
      {label ? (
        <label className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
