import React, { useState } from "react";
import {Link} from 'react-router-dom';
import "./Home.css"

const Header = () => {
    return(
        <div className="container">
            <ul className="header-list">
                <li><Link className='text-link' to='/'>Home</Link></li>
                <li><Link className='text-link' to='/header'>Header</Link></li>
                <li><Link className='text-link' to='/navbar'>Navbar</Link></li>
                <li><Link className='text-link' to='/footer'>Footer</Link></li>
                <li><Link className='text-link' to='/body'>Body</Link></li>
                <li><Link className='text-link' to='/practice'>Practice</Link></li>
                <li><Link className='text-link' to='/list'>List</Link></li>
            </ul> 
            <hr/>
        </div>
    )
}
export default Header;