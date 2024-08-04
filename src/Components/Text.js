import React from "react";
import "./Text.css";

const Text = ({ text, className }) => {
  return <h1 className={className}>{text}</h1>;
};

export default Text;
