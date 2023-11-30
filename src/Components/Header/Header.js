import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./Header.css"
import Banner from './Banner/Banner';
import Loginbanner from './Loginbanner/Loginbanner';
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
    <Loginbanner />
    <Newsletter />
    <Address />
    </>
)
}

export default Header;




