import React from "react";
import Shoecollection from "./Shoe_Collection";
import data_product from "../../../Assets/shoe_data";
import "./Shop.css";

const Shop = ({handleClick, setShow}) => {
  
  return (
    <>
    
    <div className="shop" id="shop">
      <h1>SHOP</h1>
      <hr />   
      <div className="big-words">
      <h1>NIKE</h1>
      <h1>NIKE</h1>
      </div>
      <div className="collections">
        {data_product.map((item) => {
          return (
            <div className="shoecolmap">
              <Shoecollection
                key={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
              />
              <div className="addcart">
                <button onClick={()=>handleClick(item)}>Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-button">
          <button onClick={()=>{setShow(false)}}>Go to Cart</button>
      </div>
    </div>
    
    
    </>
    
  );
};

export default Shop;
