import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Practice from './Components/Practice/Practice';
import NewComp from './Components/NewComp/NewComp';
import NewComp1 from './Components/NewComp/NewComp1';
import Body from './Components/Body/Body'


function App(){ 
  return(
    <>
     
    <Navbar />
    <Body />
    <Header />
    <Footer /> 
    <NewComp />
    <NewComp1  name="Dinesh" company="HCL"/>
    <Practice />
   
    
    </>
  )
}
export default App;
