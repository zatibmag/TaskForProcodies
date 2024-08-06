import React from "react";
import "../Css/Input.css";

export function Input({ placeholder, id, type = "text" }) {
  return (
    <input
      className="form-input"
      type={type}
      id={id}
      placeholder={placeholder}
    />
  );
}
