import React from "react";
import { Link } from 'react-router-dom';
import Shoecollection from "./Shoe_Collection";
import data_product from "../../../Assets/shoe_data";
import "./Shop.css";


const Shop = () => {
  return (
    <div className="shop" id="shop">
      <h1>SHOP</h1>
      <hr />
      <div className="collections">
        {data_product.map((item, i) => {
          console.log(`${item.new_price}`);
          return (
            <Shoecollection
              key={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
            />
          );
        })}
      </div>
      <div className="cart-button">
      <Link to="/cart">
        <button>Go to Cart</button>
      </Link>
      </div>
    </div> 
  );
};

export default Shop;
