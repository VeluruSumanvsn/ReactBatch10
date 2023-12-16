import React from "react";
import "./Shoe_Collection.css";

const Shoecollection = (props) => {
  return (
    <>
      <div className="shoecol-div">
        <div className="store-image">
          <img src={props.image} alt="shoes" />
          <p>{props.name}</p>
          <div className="item-prices">
            <p>
              &#8377;<span>{props.new_price}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoecollection;
