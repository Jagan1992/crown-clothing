import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ type, value, className }) => {
  return <input className={className} type={type} value={value} />;
};

export default CustomButton;
