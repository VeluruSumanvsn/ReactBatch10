import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div>
            <ul className="container">
            <Link to='/navbar'> <li>navbar</li></Link>
            <Link to='/footer'><li>footer</li></Link>
            <Link to='/body'><li>body</li></Link>
            <Link to='/practice'><li>practice</li></Link>
            <Link to='/list'><li>list</li></Link>
        </ul> 
        </div>
    )
}
export default Header;