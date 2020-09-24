import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ type, value, className, handleClick }) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onClick={handleClick}
    />
  );
};

export default CustomButton;
