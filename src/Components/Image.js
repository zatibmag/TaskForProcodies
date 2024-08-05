import React from "react";
import "../Css/Image.css";

export function Image({ src, className, alt }) {
  return <img src={src} className={className} alt={alt} />;
}
