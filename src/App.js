import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nikestore from './Components/NikeStore/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import List from './Components/List/List';
import Gallery from './Components/Gallery/Gallery';
import BillingForm from './Components/NikeStore/Billing/Billing';

function App(){ 
  return(
  <>
    <BrowserRouter>
    
      <Routes>
      <Route path='/' element={<Home />}/>{/* sujith */}
        <Route path='/Nikestore' element={<Nikestore />}/>{/* sujith */}
        <Route path='/navbar' element={<Navbar />}/>  {/* surendra */}
        <Route path='/footer' element={<Footer />}/>{/*Surekha */}
        <Route path='/body' element={<Body />}/> {/* Jyothi*/}
        <Route path='/gallery' element={<Gallery />}/> {/* Sekhar */}
        <Route path='/list' element={<List />}/>{/* Vanaja */}
        <Route path='/billing' element={<BillingForm />}/>{/* sujith */}
      </Routes>
    </BrowserRouter>
  </>
    
  )
}
export default App;
