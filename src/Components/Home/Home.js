import React from "react";
import {Link} from 'react-router-dom';
import "./Home.css"
// import Homepage from "./Homepage"
import bgimg from "../../Assets/1.png"


const Header = () => {
    return(
        <>
        <div className="components">
            <img src={bgimg} alt="components selection" />
        </div>
        <div className="home">
            <ul className="home-list">
                <li><Link className='text-link' to='/header'>Header</Link></li>
                <li><Link className='text-link' to='/navbar'>Navbar</Link></li>
                <li><Link className='text-link' to='/footer'>Footer</Link></li>
                <li><Link className='text-link' to='/body'>Body</Link></li>
                <li><Link className='text-link' to='/gallery'>Gallery</Link></li>
                <li><Link className='text-link' to='/list'>List</Link></li>
            </ul> 
        </div>
        </>
  )
}
export default Header;