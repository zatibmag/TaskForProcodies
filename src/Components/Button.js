import React from "react";
import "../Css/Button.css";

export function Button({ type, text, className }) {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
}
