import React from 'react';
import "./Header.css"
import Banner from './Banner/Banner';
import Loginbanner from './Loginbanner/Loginbanner';
import Address from './Addressbar/Address';
import Newsletter from './Newsletter/Newsletter';
import Navbar_header from './Navbar_header/Navbar_header';
import Shop from './Shop/Shop';
import Logo from "./Logo/Logo";
const Header = () => {
return (
    <>
    <Navbar_header />
    <Banner />
    <Shop />
    <Loginbanner />
    <Newsletter />
    <Logo />
    <Address />
    </>
)
}

export default Header;




