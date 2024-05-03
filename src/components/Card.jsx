import React from "react";

function Card({ currentImage }) {
  return (
    <div className="cardContainer">
      <img src={currentImage} alt="" className="apic" />
    </div>
  );
}

export default Card;
