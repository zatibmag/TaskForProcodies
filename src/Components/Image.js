import React from "react";
import "../Css/Image.css";

export function Image({ src, className, alt, onClick }) {
  return <img src={src} className={className} alt={alt} onClick={onClick} />;
}
