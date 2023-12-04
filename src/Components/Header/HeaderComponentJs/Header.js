import React, { useState } from 'react';
import "../HeaderComponentCSS/Header.css"
import Banner from '../HeaderComponentJs/Banner';
import Loginbanner from '../HeaderComponentJs/Loginbanner';
import Address from '../HeaderComponentJs/Address';
import Newsletter from '../HeaderComponentJs/Newsletter';
import NavbarHeader from '../HeaderComponentJs/NavbarHeader';
import Shop from '../HeaderComponentJs/Shop';
import Logo from "../HeaderComponentJs/Logo";
import Cart from '../HeaderComponentJs/Cart';
import "bootstrap/dist/css/bootstrap.min.css"

const Header = () => {

    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        let isPresent = false;
        cart.forEach((product)=>{
            if (item.id === product.id)
            isPresent = true;
        })
        if (isPresent)
            return ;
        setCart([...cart, item]);
        
    }

    const handleChange = (item, d) => {
        let ind = -1;
        cart.forEach((data,index)=>{
            if (data.id === item.id)
            ind = index;
        });
        const tempArray = cart;
        tempArray[ind].amount += d;
        if (tempArray[ind].amount === 0)
                 tempArray[ind].amount = 1;
        setCart([...tempArray])
    }

return (
    <>
    <NavbarHeader size={cart.length} setShow={setShow}/>
    <Banner />
    {
        show ? <Shop handleClick={handleClick} setShow={setShow}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
    }
    <Loginbanner />
    <Newsletter />
    <Logo />
    <Address />
    </>
)
}

export default Header;




