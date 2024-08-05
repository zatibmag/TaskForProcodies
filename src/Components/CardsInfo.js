import React from "react";
import { Text } from "./Text";
import { Image } from "./Image";
import cards from "../Images/cards.png";

export function CardsInfo() {
  return (
    <>
      <Text className="card-text" text="We accept the following credit cards" />
      <Image className="small-image" src={cards} alt="cards" />
    </>
  );
}
