import React from "react";
import "./Hero.css";
import fed from "../../Assets/FED.jpg"

const Hero = () => {
  return (
    <>
      <div className="hero-component">
      <div className="left-content">
          <img src={fed} alt="image"/>
        </div>
        <div className="right-content">
          <h1>&lt;FRONTEND FREAKERS/&gt;</h1>
          <p>One Stop For Learning </p>
          <p><span id="logo">FRONTEND DEVELOPMENT</span></p>
          <button><a href="#course-list">Courses</a></button>
        </div>
      </div>
    </>
  );
};

export default Hero;
