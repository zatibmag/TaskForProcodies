import React from "react";
import { Post } from "./Post";
import openBox1 from "../Images/openBox1.png";
import openBox2 from "../Images/openBox2.png";
import { HeadingForMiddlePart } from "./HeadingForMiddlePart";

export function MiddlePart() {
  return (
    <>
      <HeadingForMiddlePart />
      <Post
        heading_text={
          <>
            Curious about the <span style={{ color: "#006340" }}>StockX</span>
            <br /> Mystery Box?
          </>
        }
        textBlock1={
          <>
            Experience the thrill of unboxing cutting-edge gadgets with Stockx
            Mystery Boxes.
            <br /> Each box is a treasure trove of high-quality electronics,
            handpicked to elevate your
            <br /> tech game.
          </>
        }
        textBlock2={
          <>
            Expect the unexpected! Our boxes are packed with the latest gadgets,
            from
            <br /> smartphones to gaming consoles, ensuring you get the best
            tech surprises every
            <br /> time.
          </>
        }
        src={openBox1}
        alt="openBox1"
        image_css="post-image"
        image_position_css="left"
      />
      <Post
        heading_text={
          <>
            Why is everyone buzzing
            <br /> about these boxes?
          </>
        }
        textBlock1={
          <>
            StockX Mystery Boxes are not just about products; they’re about the
            experience.
            <br /> Imagine the excitement of unveiling top-tier electronics at a
            fraction of the cost.
          </>
        }
        textBlock2={
          <>
            Our boxes include a variety of premium tech items, making it a
            must-have for
            <br /> every tech enthusiast. Join the buzz and see why everyone is
            raving about the
            <br /> unbeatable value and surprise factor of Stockx Mystery Boxes!
          </>
        }
        src={openBox2}
        alt="openBox2"
        image_css="post-image"
        image_position_css="right"
      />
    </>
  );
}
