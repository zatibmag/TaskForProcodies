import React from "react";
import "../Css/Heading.css";

export function Heading({ text, className }) {
  return <h1 className={className}>{text}</h1>;
}
