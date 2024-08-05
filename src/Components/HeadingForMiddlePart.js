import React from "react";
import { Heading } from "./Heading";
import { Text } from "./Text";

export function HeadingForMiddlePart() {
  return (
    <>
      <Heading
        className="middle-heading"
        text={
          <>
            Top Tech Mystery Box
            <br /> at Unbeatable Prices
          </>
        }
      />
      <Text
        className="green-text"
        text={
          <>Fast shipping | Easy returns | Special discounts for students</>
        }
      />
    </>
  );
}
