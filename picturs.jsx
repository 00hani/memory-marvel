import React from "react";
import Pictur from "./pictur";
import airplane from "./assets/icons/airplane.svg";
import bath from "./assets/icons/bathtub.svg";
import emoji from "./assets/icons/emoji.svg";
import card2 from "./assets/icons/card.svg";
import cocktail from "./assets/icons/cocktail.svg";

function Picturs() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "120px 120px 120px 120px 120px",
        gap: "15px",
      }}
    >
      <Pictur image2={airplane} />
      <Pictur image2={cocktail} /> <Pictur image2={bath} />{" "}
      <Pictur image2={cocktail} /> <Pictur image2={bath} />{" "}
      <Pictur image2={card2} /> <Pictur image2={emoji} />{" "}
      <Pictur image2={airplane} /> <Pictur image2={emoji} />{" "}
      <Pictur image2={card2} />
    </div>
  );
}

export default Picturs;
