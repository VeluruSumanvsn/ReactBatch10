import React from 'react';
import "./Header.css"
import Banner from './Banner/Banner';
import Loginbanner from './Loginbanner/Loginbanner';
import Address from './Addressbar/Address';
import Newsletter from './Newsletter/Newsletter';
import NavbarHeader from './NavbarHeader/NavbarHeader';
import Shop from './Shop/Shop';
import Logo from "./Logo/Logo";



const Header = () => {
return (
    <>
    <NavbarHeader />
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




