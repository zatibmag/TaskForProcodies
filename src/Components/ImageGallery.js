import React, { useState } from "react";
import "../Css/ImageGallery.css";
import main from "../Images/main.png";
import thumbnail1 from "../Images/thumbnail1.png";
import thumbnail2 from "../Images/thumbnail2.png";
import thumbnail3 from "../Images/thumbnail3.png";

export function ImageGallery() {
  const [mainImg, setMainImg] = useState(main);
  const defaultMainImage = main;

  const thumbnails = [
    { src: thumbnail1, alt: "Thumbnail 1" },
    { src: thumbnail2, alt: "Thumbnail 2" },
    { src: thumbnail3, alt: "Thumbnail 3" },
  ];

  const handleMainImageClick = () => {
    if (mainImg !== defaultMainImage) {
      setMainImg(defaultMainImage);
    }
  };

  const handleThumbnailClick = (thumbnailSrc) => {
    if (mainImg === thumbnailSrc) {
      setMainImg(defaultMainImage);
    } else {
      setMainImg(thumbnailSrc);
    }
  };

  return (
    <div className="image-gallery">
      <div className="main-image-container">
        <img
          src={mainImg}
          alt="Main"
          className="main-image"
          onClick={handleMainImageClick}
        />
      </div>
      <div className="thumbnail-container">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail.src}
            alt={thumbnail.alt}
            className="thumbnail"
            onClick={() => handleThumbnailClick(thumbnail.src)}
          />
        ))}
      </div>
    </div>
  );
}
