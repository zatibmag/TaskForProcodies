import React from "react";
import { Text } from "./Text";
import { Image } from "./Image";
import cards from "/home/zatibmag/Desktop/for_procodies/src/Images/cards.png";

export function CardsInfo() {
  return (
    <>
      <Text
        className="small-text"
        text="We accept the following credit cards"
      />
      <Image className="small-image" src={cards} />
    </>
  );
}
