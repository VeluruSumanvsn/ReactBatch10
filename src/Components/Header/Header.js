import React from 'react';
import "./Header.css"
import Banner from './Banner/Banner';
import Loginform from './Loginform/Loginform';
import Address from './Addressbar/Address';
import Newsletter from './Newsletter/Newsletter';
import Navbar_header from './Navbar_header/Navbar_header';
import Shop from './Shop/Shop';

const Header = () => {
return (
    <>
    <Navbar_header />
    <Banner />
    <Shop />
    <Loginform />
    <Newsletter />
    <Address />
    </>
)
}

export default Header;