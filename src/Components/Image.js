import React from "react";
import "../Css/Image.css";

export function Image({ src, className }) {
  return <img src={src} className={className} />;
}
