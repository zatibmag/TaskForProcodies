import React from "react";
import { ImageGallery } from "./ImageGallery";
import { PaymentForm } from "./PaymentForm";
import { Heading } from "./Heading";
import { Text } from "./Text";
import "../Css/TopPart.css";

export function TopPart() {
  return (
    <div className="top-part-container">
      <ImageGallery />
      <div>
        <Heading
          className="post-heading"
          text="Chance to win a StockX Mystery Box today!"
        />
        <Text
          className="post-text"
          text="Unleash the Excitement of Mystery Electronics"
        />
        <PaymentForm />
      </div>
    </div>
  );
}
