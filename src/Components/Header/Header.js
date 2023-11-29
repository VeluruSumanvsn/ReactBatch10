import React from 'react';
import "./Header.css"
import Banner from './Banner/Banner';
import Loginform from './Loginform/Loginform';
import Newsletter from './Newsletter/Newsletter';

const Header = () => {
return (
    <>
    <Banner />
    <Loginform />
    <Newsletter />
    </>
)
}

export default Header;