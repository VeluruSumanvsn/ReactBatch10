import "./Body.css";
import logo from "../../Assets/logo192.png";
import React from "react";

const Body = () => {
  return (
    <>
      <div className="body">
        <div className="body-content">
          <img src={logo} alt="React-logo" />
          <h2>React</h2>
          <p>The library for web and native user interfaces</p>
        </div>
        <div className="body-buttons">
          <button id="b1">Learn React</button>
          <button id="b2">API Reference</button>
        </div>
      </div>
    </>
  );
};

export default Body;
