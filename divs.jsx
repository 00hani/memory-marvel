import React from "react";
import Div from "./div";
import stopwatch from "./assets/icons/stopwatch.svg";
import flip from "./assets/icons/flip.svg";
import medal from "./assets/icons/medal.svg";
function Divs() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Div image={stopwatch} text="timer:60" />
      <Div image={flip} text="flip:0" />
      <Div image={medal} text="score:0" />
    </div>
  );
}

export default Divs;
