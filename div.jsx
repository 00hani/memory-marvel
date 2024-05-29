import React from "react";

function Div({ image, text }) {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "50px",
          width: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          borderRadius: "50px",
          position: "relative",
          bottom: "5px",
        }}
      >
        <img src={image} alt="" height="30px" width="30px" />
      </div>
      <div
        style={{
          background: "white",
          height: "40px",
          width: "140px",
          borderRadius: "15px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Div;
