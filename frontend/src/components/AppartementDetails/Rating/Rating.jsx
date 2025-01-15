import React from "react";
import "../../style.css";

function Rating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push("red");
    } else {
      stars.push("gray");
    }
  }

  return (
    <div className="rating">
      {stars.map((color, index) => (
        <i key={index} className={`fa-solid fa-star ${color}-star`}></i>
      ))}
    </div>
  );
}

export default Rating;
