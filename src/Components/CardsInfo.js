import React from "react";
import { Text } from "./Text";
import { Image } from "./Image";
import cards from "../Images/cards.png";

export function CardsInfo() {
  return (
    <>
      <Text className="card-text" text="We accept the following credit cards" />
      <div className="image-center">
        <Image className="card-image" src={cards} alt="cards" />
      </div>
    </>
  );
}
