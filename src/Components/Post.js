import React from "react";
import { Text } from "./Text";
import { Image } from "./Image";
import { Heading } from "./Heading";
import "../Css/Post.css";

export function Post({
  heading_text,
  textBlock1,
  textBlock2,
  src,
  alt,
  image_position_css,
  image_css,
}) {
  return (
    <div className="post-container">
      {image_position_css === "right" ? (
        <>
          <div className="post-item">
            <div className="middle-text-container">
              <Heading className="post-heading" text={heading_text} />
              <Text className="post-text" text={textBlock1} />
              <Text className="post-text" text={textBlock2} />
            </div>
          </div>
          <div className="post-item">
            <Image className={image_css} src={src} alt={alt} />
          </div>
        </>
      ) : (
        <>
          <div className="post-item">
            <Image className={image_css} src={src} alt={alt} />
          </div>
          <div className="post-item">
            <div className="middle-text-container">
              <Heading className="post-heading" text={heading_text} />
              <Text className="post-text" text={textBlock1} />
              <Text className="post-text" text={textBlock2} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
