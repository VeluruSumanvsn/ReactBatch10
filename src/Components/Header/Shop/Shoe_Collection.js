import React from 'react';
import "./Shop.css"


const Shoecollection = (props) => {
  return (
     <>
       <div className='store-image'>
        <img src={props.image} alt="image"/>
        <p>{props.name}</p>
        <div className='item-prices'>
            <p>&#8377;{props.new_price}</p>
        </div>
      </div>
      </>
      
  
)
}

export default Shoecollection;