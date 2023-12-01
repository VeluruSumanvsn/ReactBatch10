import React, { useState } from 'react';
import "./Header.css"
import Banner from './Banner/Banner';
import Loginbanner from './Loginbanner/Loginbanner';
import Address from './Addressbar/Address';
import Newsletter from './Newsletter/Newsletter';
import NavbarHeader from './NavbarHeader/NavbarHeader';
import Shop from './Shop/Shop';
import Logo from "./Logo/Logo";
import Cart from './Cart/Cart';


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




