import React from "react";
import "./Shop.css";
import "./Shoe_Collection.css"


const Shoecollection = (props) => {
  return (
    <>
    <div className="shoecol-div">
      <div className="store-image">
        <img src={props.image} alt="image" />
        <p>{props.name}</p>
        <div className="item-prices">
          <p>&#8377;<span>{props.new_price}</span></p>
        </div>
      </div>
      <div className="addcart">
        <button>Add To Cart</button>
      </div>
      </div>
    </>
  );
};

export default Shoecollection;
