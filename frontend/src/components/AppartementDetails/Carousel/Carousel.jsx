import React, { useState } from "react";
import "../../style.css";

function Carousel({ pictures, title }) {
  const [currentImgIndex, setImgIndex] = useState(0);

  const handleNext = () => {
    setImgIndex((imgIndex) => {
      if (imgIndex === pictures.length - 1) {
        return 0;
      } else {
        return imgIndex + 1;
      }
    });
  };

  const handlePrevious = () => {
    setImgIndex((imgIndex) => {
      if (imgIndex === 0) {
        return pictures.length - 1;
      } else {
        return imgIndex - 1;
      }
    });
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <div
          onClick={handlePrevious}
          className="carousel__button carousel__button--prev"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      )}

      <img
        src={pictures[currentImgIndex]}
        alt={`${title} - image ${currentImgIndex + 1}`}
        className="carousel__image"
      />

      {pictures.length > 1 && (
        <div
          onClick={handleNext}
          className="carousel__button carousel__button--next"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      )}

      {pictures.length > 1 && (
        <div className="carousel__indicator">
          {currentImgIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}

export default Carousel;
