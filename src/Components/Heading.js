import React from "react";
import "./Heading.css";

const Heading = ({ text, className }) => {
  return <h1 className={className}>{text}</h1>;
};

export default Heading;
