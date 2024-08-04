import React from "react";
import "../Css/Text.css";

export function Text({ text, className }) {
  return <h1 className={className}>{text}</h1>;
}
