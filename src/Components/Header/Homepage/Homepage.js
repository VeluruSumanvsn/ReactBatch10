import React from 'react';
import "./Homepage.css"
import home_page from "../../../Assets/1.png"


const Homepage = () => {
return (
  <>
    <div className='page-content'>
      <img src={home_page} alt='homepage image'/>
    </div>
  </>
)
}

export default Homepage;