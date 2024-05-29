import React, { useState } from "react";
import card1 from "./assets/icons/card1.svg";

function Pictur({ image2 }) {
  const [currentImage, setCurrentImage] = useState(card1);

  const handleClick = () => {
    setCurrentImage(image2);
  };
  const handleDoubleClick = () => {
    setCurrentImage(card1);
  };
  return (
    <div style={{ height: "120px", width: "120px", backgroundColor: "white" }}>
      <img
        src={currentImage}
        alt=""
        height="120px"
        width="120px"
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
      />
    </div>
  );
}

export default Pictur;
