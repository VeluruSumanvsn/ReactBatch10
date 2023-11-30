import React from "react";

import img1 from "../../Images/img1.avif";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpeg";
import img4 from "../../Images/img4.avif";
import img5 from "../../Images/img5.avif";
import img6 from "../../Images/img6.jpeg";

function Practice() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Photo gallery</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <div className="frame">
          <img src={img1} />
        </div>
        <div className="frame">
          <img src={img2} />
        </div>
        <div className="frame">
          <img src={img3} />
        </div>{" "}
        <div className="frame">
          <img src={img4} />
        </div>{" "}
        <div className="frame">
          <img src={img5} />
        </div>{" "}
        <div className="frame">
          <img src={img6} />
        </div>
      </div>
    </>
  );
}

export default Practice;