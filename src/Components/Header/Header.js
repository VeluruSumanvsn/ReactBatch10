import React from 'react';
import "./Header.css"
import Banner from './Banner/Banner';
import Loginform from './Loginform/Loginform';
import Address from './Addressbar/Address';
const Header = () => {
return (
    <>
    <Banner />
    <Loginform />
    <Address />
    </>
)
}

export default Header;